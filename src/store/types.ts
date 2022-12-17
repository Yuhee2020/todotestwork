import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {rootReducer} from "./store";

export type StateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<StateType, unknown, AnyAction>;



export type TodolistType = {
    todolistTitle: string;
    todolistId: string;
    todolistImage: string;
    tasks: TaskType[];
}
export type TaskType = {
    taskId: string;
    taskTitle: string;
    deadline?: string;
    taskImage: string;
    checked: boolean
}