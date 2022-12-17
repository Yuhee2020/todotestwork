import {combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {todolistReducer} from "./todolist-reducer";
import {todoReducer} from "./todo-reducer";
import {appReducer} from "./app-reducer";


export const rootReducer = combineReducers({
    todolist: todolistReducer,
    todo:todoReducer,
    app:appReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware)})


// @ts-ignore
window.store = store

