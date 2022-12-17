import React, {ChangeEvent} from 'react';
import {Button, Tooltip} from "@mui/material";
import {convertFileToBase64} from "../../../utils/base64Converter";
import {changeTaskImage} from "../../../store/todolist-reducer";
import s from "./TaskImage.module.scss"
import noImage from "../../../images/no-image-icon.png"
import {useAppDispatch} from "../../../hooks/hooks";

type PropsType = {
    taskImage: string
    taskId: string
}

export const TaskImage = ({taskImage, taskId}: PropsType) => {
    const dispatch = useAppDispatch();
    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]

            if (file.size < 200000) {
                convertFileToBase64(file, (file64: string) => {
                    dispatch(changeTaskImage({taskImage: file64, taskId}))
                })
            } else {
                alert("Incorrect file size, file must be less than 200 kb")

            }
        }
    }
    return (
        <Tooltip title="Click to upload image" placement={"left"} arrow>
            <Button component="label">
                <img src={taskImage ? taskImage : noImage} alt={"task"} className={s.image}/>
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

