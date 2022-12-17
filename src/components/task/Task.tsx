import React from "react";
import {changeTaskStatus, changeTaskTitle, deleteTask} from "../../store/todolist-reducer";
import {EditablSpan} from "../common/editablSpan/EditablSpan";
import {Checkbox, IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {TaskImage} from "./taskImage/TaskImage";
import {Deadline} from "./deadline/Deadline";
import s from "./Task.module.scss"
import {TaskType} from "../../store/types";
import {useAppDispatch} from "../../hooks/hooks";

type PropsType = {
    task: TaskType
}

export const Task = ({task: {checked, taskId, taskImage, taskTitle, deadline}}: PropsType) => {
    const dispatch = useAppDispatch()

    const handleCheckboxChange = () => {
        dispatch(changeTaskStatus({checked: !checked, taskId}))
    }
    const handleDeleteClick = () => {
        dispatch(deleteTask({taskId}))
    }
    const changeTitle = (taskTitle: string) => {
        dispatch(changeTaskTitle({taskTitle, taskId}))
    }

    return (
        <div className={checked ? s.checkedTask : s.task}>
            <Checkbox
                color={"success"}
                onChange={handleCheckboxChange}
                checked={checked}/>
            <div className={s.editableSpan}>
                <EditablSpan title={taskTitle}
                             changeTitle={changeTitle}/>
            </div>
            <Deadline
                deadline={deadline ? deadline : ""}
                taskId={taskId}/>
            <TaskImage taskImage={taskImage}
                       taskId={taskId}/>
            <IconButton onClick={handleDeleteClick}>
                <DeleteIcon/>
            </IconButton>
        </div>)
}

