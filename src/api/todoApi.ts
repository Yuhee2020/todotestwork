import {AxiosResponse} from "axios";
import {instance} from "./apiConfig";
import {
    AddTodoResponseType,
    DeleteTodoResponseType, GetTodosResponseType,
    NewTodoType,
    UpdatedTodoType,
    UpdateTodoResponseType
} from "./types";

export const todoAPI = {
    getTodos() {
        return instance.get<GetTodosResponseType>("todos")
    },
    addTodo: function (newTodo: NewTodoType) {
        return instance.post<NewTodoType, AxiosResponse<AddTodoResponseType>>("add-todo", newTodo)
    },
    deleteTodo(id: string) {
        return instance.delete<DeleteTodoResponseType>(`delete-todo/${id}`)
    },
    updateTodo(task: UpdatedTodoType) {
        return instance.put<UpdatedTodoType, AxiosResponse<UpdateTodoResponseType>>(`edit-todo/${task.id}`, task)
    }
}


