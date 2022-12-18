import React, {useCallback} from "react";
import {updateTodoTC} from "../../store";
import {EditablSpan} from "../common/editablSpan/EditablSpan";
import {Checkbox} from "@mui/material";
import s from "./Todo.module.scss"
import {useAppDispatch} from "../../hooks/hooks";
import {TodoType} from "../../api";
import {TodoImage} from "./todoImage/TodoImage";
import {DeleteTodoModal} from "./deleteTodoModal/DeleteTodo.Modal";

type PropsType = {
    todo: TodoType
}

export const Todo =React.memo( ({todo: {status,name,description,_id}}: PropsType) => {
    const dispatch = useAppDispatch()

    const handleCheckboxChange = () => {
        dispatch(updateTodoTC({id:_id, status:!status}))
    }
    const changeTitle =useCallback( (taskTitle: string) => {
        dispatch(updateTodoTC({id:_id, name:taskTitle}))
    },[_id,dispatch])

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
            <DeleteTodoModal todoId={_id} todoName={name}/>
        </div>)
})

