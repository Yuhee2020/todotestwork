import React from "react";
import {deleteTodoTC, updateTodoTC} from "../../store";
import {EditablSpan} from "../common/editablSpan/EditablSpan";
import {Checkbox, IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import s from "./Task.module.scss"
import {useAppDispatch} from "../../hooks/hooks";
import {TodoType} from "../../api";
import {TodoImage} from "./todoImage/TodoImage";

type PropsType = {
    todo: TodoType
}

export const Todo = ({todo: {status,name,description,_id}}: PropsType) => {
    const dispatch = useAppDispatch()

    const handleCheckboxChange = () => {
        dispatch(updateTodoTC({id:_id, status:!status}))
    }
    const handleDeleteClick = () => {
        dispatch(deleteTodoTC(_id))
    }
    const changeTitle = (taskTitle: string) => {
        dispatch(updateTodoTC({id:_id, name:taskTitle}))
    }

    return (
        <div className={status ? s.checkedTask : s.task}>
            <Checkbox
                color={"success"}
                onChange={handleCheckboxChange}
                checked={status}/>
            <div className={s.editableSpan}>
                <EditablSpan title={name}
                             changeTitle={changeTitle}/>
            </div>
            <TodoImage todoImage={description}
                       todoId={_id}/>
            <IconButton onClick={handleDeleteClick}>
                <DeleteIcon/>
            </IconButton>
        </div>)
}

