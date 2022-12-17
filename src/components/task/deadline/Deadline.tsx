import React from 'react';
import {EditablSpan} from "../../common/editablSpan/EditablSpan";
import {changeTaskDeadLine} from "../../../store/todolist-reducer";
import dayjs from "dayjs";
import s from './DeadLline.module.scss'
import {EditableButton} from "../../common/editableButton/editableButton";
import {useAppDispatch} from "../../../hooks/hooks";

type PropsType={
    taskId:string
    deadline:string
}
export const Deadline = ({taskId, deadline}:PropsType) => {

    const date=dayjs().format('YYYY-MM-DD')
    const dispatch = useAppDispatch()
    const changeDeadline=(deadline:string)=>{
        dispatch(changeTaskDeadLine({deadline, taskId}))
    }

    if(!deadline){
        return <div className={s.deadline}><EditableButton changeTitle={changeDeadline}/></div>
    }

    return (
        <div className={date>= deadline ? s.isDeadline : s.deadline}>
            <EditablSpan type={"date"} title={deadline} changeTitle={changeDeadline}/>
        </div>
    );
};

