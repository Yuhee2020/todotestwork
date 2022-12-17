import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {child, get, getDatabase, ref, set} from "firebase/database";
import {v1} from "uuid";
import {StateType, TodolistType} from "./types";


//AsyncThunks

export const getTodolist = createAsyncThunk("todolist/getTodolist", (params, {dispatch}) => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `todolist/`)).then((snapshot) => {
        dispatch(setTodolist({todolist: snapshot.val()}))
    }).catch((error) => {
        console.error(error);
    });
})

export const postTodolist = createAsyncThunk("todolist/postTodolist", (params: { todolist: TodolistType }, {
    dispatch
}) => {
    const db = getDatabase();
    set(ref(db, 'todolist/'), params.todolist)
        .then(() => {
            dispatch(getTodolist())
        })
        .catch((error) => {
            console.error(error);
        });
})

export const changeTodolistTitle = createAsyncThunk("todolist/changeTodolistTitle", (params: { title: string }, {
    dispatch,
    getState
}) => {
    const state = getState() as StateType
    const {todolistId, todolistImage, tasks} = state.todolist.todolist
    const newTodolist = {
        todolistTitle: params.title,
        todolistId,
        todolistImage,
        tasks,
    }
    dispatch(postTodolist({todolist: newTodolist}))
})

export const addNewTask = createAsyncThunk("todolist/addNewTask", (params: { taskTitle: string }, {
    dispatch, getState
}) => {
    const state = getState() as StateType
    const {todolistTitle, todolistId, todolistImage, tasks = []} = state.todolist.todolist
    const newTodolist = {
        todolistTitle,
        todolistId,
        todolistImage,
        tasks: [
            {
                taskId: v1(),
                taskTitle: params.taskTitle,
                taskImage: "",
                checked: false
            },
            ...tasks,],
    }
    dispatch(postTodolist({todolist: newTodolist}))
})

export const deleteTask = createAsyncThunk("todolist/deleteTask", (params: { taskId: string }, {
    dispatch, getState
}) => {

    const state = getState() as StateType
    const {todolistTitle, todolistId, todolistImage, tasks} = state.todolist.todolist
    const newTodolist = {
        todolistTitle,
        todolistId,
        todolistImage,
        tasks: tasks.filter(task => task.taskId !== params.taskId),
    }
    dispatch(postTodolist({todolist: newTodolist}))
})

export const changeTaskTitle = createAsyncThunk("todolist/changeTaskTitle", (params: { taskTitle: string, taskId: string }, {
    dispatch, getState
}) => {

    const state = getState() as StateType
    const {todolistTitle, todolistId, todolistImage, tasks} = state.todolist.todolist
    const newTodolist = {
        todolistTitle,
        todolistId,
        todolistImage,
        tasks: tasks.map(task => task.taskId === params.taskId ? {...task, taskTitle: params.taskTitle} : task)
    }
    dispatch(postTodolist({todolist: newTodolist}))
})

export const changeTaskDeadLine = createAsyncThunk("todolist/changeTaskDeadLine", (params: { deadline: string, taskId: string }, {
    dispatch, getState
}) => {

    const state = getState() as StateType
    const {todolistTitle, todolistId, todolistImage, tasks} = state.todolist.todolist
    const newTodolist = {
        todolistTitle,
        todolistId,
        todolistImage,
        tasks: tasks.map(task => task.taskId === params.taskId ? {...task, deadline: params.deadline} : task)
    }
    dispatch(postTodolist({todolist: newTodolist}))
})

export const changeTaskImage = createAsyncThunk("todolist/changeTaskImage", (params: { taskImage: string, taskId: string }, {
    dispatch, getState
}) => {

    const state = getState() as StateType
    const {todolistTitle, todolistId, todolistImage, tasks} = state.todolist.todolist
    const newTodolist = {
        todolistTitle,
        todolistId,
        todolistImage,
        tasks: tasks.map(task => task.taskId === params.taskId ? {...task, taskImage: params.taskImage} : task)
    }
    dispatch(postTodolist({todolist: newTodolist}))
})

export const changeTaskStatus = createAsyncThunk("todolist/changeTaskStatus", (params: { checked: boolean, taskId: string }, {
    dispatch, getState
}) => {

    const state = getState() as StateType
    const {todolistTitle, todolistId, todolistImage, tasks} = state.todolist.todolist
    const newTodolist = {
        todolistTitle,
        todolistId,
        todolistImage,
        tasks: tasks.map(task => task.taskId === params.taskId ? {...task, checked: params.checked} : task)
    }
    dispatch(postTodolist({todolist: newTodolist}))
})

//Slice
export const slice = createSlice({
    name: "todolist",
    initialState: {todolist: {} as TodolistType},
    reducers: {
        setTodolist(state, action: PayloadAction<{ todolist: TodolistType }>) {
            state.todolist = action.payload.todolist
        },
    }
})

//Reducer
export const todolistReducer = slice.reducer

// Actions
export const {setTodolist} = slice.actions


