import {StateType} from "../store";

export const getAppStatus=(state:StateType) => state.app.appStatus
export const getTodos=(state:StateType) => state.todo.todos
export const getTodosTitle=(state:StateType) => state.todo.todosTitle
export const getAppError=(state:StateType) => state.app.error