import React, {ChangeEvent} from 'react';
import {Button, Tooltip} from "@mui/material";
import {convertFileToBase64} from "../../../utils/base64Converter";
import s from "./TodoImage.module.scss"
import noImage from "../../../images/no-image-icon.png"
import {useAppDispatch} from "../../../hooks/hooks";
import {setAppError, updateTodoTC} from "../../../store";

type PropsType = {
    todoImage: string
    todoId: string
}

export const TodoImage = ({todoImage, todoId}: PropsType) => {
    const dispatch = useAppDispatch();

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            if (file.size < 200000) {
                convertFileToBase64(file, (file64: string) => {
                    dispatch(updateTodoTC({id:todoId, description:file64}))
                })
            } else {
                dispatch(setAppError("Incorrect file size, file must be less than 50 kb"))
            }
        }
    }
    return (
        <Tooltip title="Click to upload image" placement={"left"} arrow>
            <Button component="label">
                <img src={todoImage!=="no" ? todoImage : noImage} alt={"task"} className={s.image}/>
                <input
                    value={""}
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={uploadHandler}/>
            </Button>
        </Tooltip>
    );
};

