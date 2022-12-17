import React, {KeyboardEvent, useState} from 'react';
import {TextField, Tooltip} from "@mui/material";

type PropsType = {
    title: string
    changeTitle: (title: string) => void
    type?: string
}

export const EditablSpan = ({title, type, changeTitle}: PropsType) => {
    const [edit, setEdit] = useState(false)
    const [newTitle, setNewTitle] = useState(title)


    const setEditMode = () => {
        setEdit(!edit)
        changeTitle(newTitle)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter" && setEditMode()
    }

    return edit
        ? <TextField
            type={type}
            style={{width: "198px"}}
            onChange={(e) => setNewTitle(e.currentTarget.value)}
            value={newTitle}
            autoFocus
            onBlur={setEditMode}
            onKeyPress={onKeyPressHandler}
            size='small'
            color='success'/>
        : (<Tooltip title="Double click to edit" placement={"left"} arrow><span
            onDoubleClick={setEditMode}>{title}</span></Tooltip>)
};
