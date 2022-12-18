import React, {KeyboardEvent, useState} from 'react';
import {TextField, Tooltip} from "@mui/material";

type PropsType = {
    title: string
    changeTitle: (title: string) => void
}

export const EditablSpan =React.memo( ({title, changeTitle}: PropsType) => {
    const [edit, setEdit] = useState(false)
    const [newTitle, setNewTitle] = useState(title)


    const setInputMode = () => {
        setEdit(!edit)
    }
    const setSpanMode=()=>{
        setEdit(!edit)
        changeTitle(newTitle)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter" && setSpanMode()
    }

    return edit
        ? <TextField
            style={{width: "198px"}}
            onChange={(e) => setNewTitle(e.currentTarget.value)}
            value={newTitle}
            autoFocus
            onBlur={setSpanMode}
            onKeyPress={onKeyPressHandler}
            size='small'
            color='success'/>
        : (<Tooltip title="Double click to edit" placement={"left"} arrow><span
            onDoubleClick={setInputMode}>{title}</span></Tooltip>)
});
