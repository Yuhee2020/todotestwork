import React, {useEffect} from 'react';
import {addNewTask, changeTodolistTitle, getTodolist} from "../../store";
import {Task} from "../task/Task";
import {EditablSpan} from "../common/editablSpan/EditablSpan";
import {AddItemForm} from "../common/addItemForm/AddItemForm";
import {Paper} from "@mui/material";
import s from "./Todolist.module.scss"
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";


export const Todolist = () => {

    const dispatch = useAppDispatch()
    const todolist = useAppSelector(state => state.todolist.todolist)

    const changeTitle = (title: string) => {
        dispatch(changeTodolistTitle({title}))
    }
    const addTask = (taskTitle: string) => {
        dispatch(addNewTask({taskTitle,}))
    }

    useEffect(() => {
        dispatch(getTodolist())
    }, [dispatch])


    return (
        <Paper elevation={10} className={s.todolist}>
            <div className={s.todolistTitle}>
                <EditablSpan
                    title={todolist.todolistTitle}
                    changeTitle={changeTitle}/>
            </div>
            <AddItemForm label={"Enter task title"} addItem={addTask}/>
                {todolist.tasks ? todolist.tasks.map(task =>
                    <Task
                        key={task.taskId}
                        task={task}/>
                ): <div>add new task please</div>}
        </Paper>
    );
};
