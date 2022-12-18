export type TodoType = {
    createdAt:string
    description:string
    name:string
    status:boolean
    updatedAt:string
    __v: number
    _id: string
}

export type GetTodosResponseType={
    todos:TodoType[]
}

export type UpdatedTodoType={
    id: string
    name?:string
    status?:boolean
    description?:string
}

export type NewTodoType={
    name:string
    status:boolean
    description:string
}

export type AddTodoResponseType={
    todo:TodoType
    todos:TodoType[]
}

export type DeleteTodoResponseType={
    message:string
    todos: TodoType[]
}

export type UpdateTodoResponseType={
    message:string
    todo:TodoType
    todos:TodoType[]
}
