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
        return res.data
    } catch (err) {
        const error = err as AxiosError
        dispatch(setAppError({error: error.message}))
        return rejectWithValue(null)
    } finally {
        dispatch(setAppStatus({status: "idle"}))
    }
})

export const addTodoTC = createAsyncThunk("todo/addTodo", async (params:{name: string, descriptions: string},{
    dispatch,
    rejectWithValue
}) => {
    dispatch(setAppStatus({status: "loading"}))
    try {
        const newTodo:NewTodoType={
            name:params.name,
            description:params.descriptions,
            status:false
        }
        const res = await todoAPI.addTodo(newTodo)
        dispatch(setTodos({todos:res.data.todos}))
    } catch (err) {
        const error = err as AxiosError
        dispatch(setAppError({error: error.message}))
        return rejectWithValue(null)
    } finally {
        dispatch(setAppStatus({status: "idle"}))
    }
})

export const deleteTodoTC = createAsyncThunk("todo/deleteTodo", async (id:string,{
    dispatch,
    rejectWithValue
}) => {
    dispatch(setAppStatus({status: "loading"}))
    try {
        const res = await todoAPI.deleteTodo(id)
        dispatch(setTodos({todos:res.data.todos}))
    } catch (err) {
        const error = err as AxiosError
        dispatch(setAppError({error: error.message}))
        return rejectWithValue(null)
    } finally {
        dispatch(setAppStatus({status: "idle"}))
    }
})

export const updateTodoTC = createAsyncThunk("todo/updateTodo", async (params:UpdatedTodoType,{
    dispatch,
    rejectWithValue
}) => {
    dispatch(setAppStatus({status: "loading"}))
    try {
        const res = await todoAPI.updateTodo(params)
        dispatch(setTodos({todos:res.data.todos}))
    } catch (err) {
        const error = err as AxiosError
        dispatch(setAppError({error: error.message}))
        return rejectWithValue(null)
    } finally {
        dispatch(setAppStatus({status: "idle"}))
    }
})



const slice = createSlice({
    name: "todo",
    initialState: {
        todos: {} as TodoType[],
        error: null as null | string
    },
    reducers: {
        setTodos(state, action: PayloadAction<{ todos: TodoType[] }>) {
            state.todos = action.payload.todos
        }
    },
    extraReducers: (builder => {
        builder.addCase(getTodosTC.fulfilled, (state, action) => {
            state.todos = action.payload
        })
    })
})

export const todoReducer = slice.reducer
export const {setTodos} = slice.actions