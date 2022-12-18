import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NewTodoType, todoAPI, TodoType, UpdatedTodoType} from "../../api";
import {AxiosError} from "axios";
import {setAppError, setAppStatus} from "../app-reducer";

export const getTodosTC = createAsyncThunk("todo/getTodo", async (params, {
    dispatch,
    rejectWithValue
}) => {
    dispatch(setAppStatus({status: "loading"}))
    try {
        const res = await todoAPI.getTodos()
        dispatch(setTodos(res.data.todos))
    } catch (err) {
        const error = err as AxiosError
        dispatch(setAppError(error.message))
        return rejectWithValue(null)
    } finally {
        dispatch(setAppStatus({status: "idle"}))
    }
})

export const addTodoTC = createAsyncThunk("todo/addTodo", async (name: string, {
    dispatch,
    rejectWithValue
}) => {
    dispatch(setAppStatus({status: "loading"}))
    try {
        const newTodo: NewTodoType = {
            name: name,
            description: "no",
            status: false
        }
        const res = await todoAPI.addTodo(newTodo)
        dispatch(setTodos(res.data.todos))
    } catch (err) {
        const error = err as AxiosError
        dispatch(setAppError(error.message))
        return rejectWithValue(null)
    } finally {
        dispatch(setAppStatus({status: "idle"}))
    }
})

export const deleteTodoTC = createAsyncThunk("todo/deleteTodo", async (id: string, {
    dispatch,
    rejectWithValue
}) => {
    dispatch(setAppStatus({status: "loading"}))
    try {
        const res = await todoAPI.deleteTodo(id)
        dispatch(setTodos(res.data.todos))
    } catch (err) {
        const error = err as AxiosError
        dispatch(setAppError(error.message))
        return rejectWithValue(null)
    } finally {
        dispatch(setAppStatus({status: "idle"}))
    }
})

export const updateTodoTC = createAsyncThunk("todo/updateTodo", async (params: UpdatedTodoType, {
    dispatch,
    rejectWithValue
}) => {
    dispatch(setAppStatus({status: "loading"}))
    try {
        const res = await todoAPI.updateTodo(params)
        dispatch(setTodos(res.data.todos))
    } catch (err) {
        const error = err as AxiosError
        dispatch(setAppError(error.message))
        return rejectWithValue(null)
    } finally {
        dispatch(setAppStatus({status: "idle"}))
    }
})


const slice = createSlice({
    name: "todo",
    initialState: {
        todos: [] as TodoType[],
        todosTitle: "What to do?"
    },
    reducers: {
        setTodos(state, action: PayloadAction<TodoType[]>) {
            state.todos = action.payload.reverse()
        },
        setTodosTitle(state, action: PayloadAction<string>) {
            state.todosTitle = action.payload
        },
    }
})

export const todoReducer = slice.reducer
export const {setTodos, setTodosTitle} = slice.actions