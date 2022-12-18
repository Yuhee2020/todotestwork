import React, {useEffect} from 'react';
import {addTodoTC, getTodosTC} from "../../store";
import {AddItemForm} from "../common/addItemForm/AddItemForm";
import {Paper} from "@mui/material";
import s from "./Todolist.module.scss"
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {EditablSpan} from "../common/editablSpan/EditablSpan";
import {setTodosTitle} from "../../store/todo-reducer";
import {Todo} from "../todo/Todo";


export const Todolist = React.memo(() => {

    const dispatch = useAppDispatch()
    const todos= useAppSelector(state => state.todo.todos)
    const todosTitle= useAppSelector(state => state.todo.todosTitle)

    const changeTitle = (title: string) => {
        dispatch(setTodosTitle(title))
    }
    const addTask = (todoTitle: string) => {
        dispatch(addTodoTC(todoTitle))
    }

    useEffect(() => {
        dispatch(getTodosTC())
    }, [dispatch])

    return (
        <Paper elevation={10} className={s.todolist}>
            <div className={s.todolistTitle}>
                <EditablSpan
                    title={todosTitle}
                    changeTitle={changeTitle}/>
            </div>
            <AddItemForm label={"Enter task title"} addItem={addTask}/>
              {todos ? todos.map(todo =>
                    <Todo
                        key={todo._id}
                        todo={todo}/>
                ): <div>add new task please</div>}
        </Paper>
    );
});
