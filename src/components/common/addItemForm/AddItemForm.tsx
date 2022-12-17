import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {IconButton, TextField} from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import s from "./addItemForm.module.scss";

type PropsType = {
    addItem: (title: string) => void
    label:string
}

export const AddItemForm = ({addItem,label}: PropsType) => {
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError("")
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter" && addI()
    }
    const addI = () => {
        if (title.trim() !== "") {
            addItem(title.trim())
            setTitle("")
        } else {
            setError("Title is required")
        }
    }

    return (
        <div className={s.addItemForm}>
            <TextField
                className={s.textField}
                color='success'
                onChange={onChangeHandler}
                value={title}
                onKeyPress={onKeyPressHandler}
                error={!!error}
                label={label}
                size='small'
                helperText={error}
            />
            <IconButton
                color='success'
                onClick={addI}
                size='small'>
                <AddBoxIcon sx={{fontSize:30}} />
            </IconButton>
        </div>
    );
};

