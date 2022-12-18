import React, {useState} from 'react';
import {Button, IconButton, Stack} from "@mui/material";
import {useAppDispatch} from "../../../hooks/hooks";
import {deleteTodoTC} from "../../../store";
import {BasicModal} from "../../common/basicModal/BasicModal";
import DeleteIcon from "@mui/icons-material/Delete";

type PropsType = {
    todoName:string
    todoId:string
}

export const DeleteTodoModal = ({todoId,todoName}: PropsType) => {

    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false);
    const handleOpenClose = () => setOpen(!open);
    const deleteCardHandler = () => {
        dispatch(deleteTodoTC(todoId))
        handleOpenClose()
    }

    return (
        <div>
            <IconButton onClick={handleOpenClose}><DeleteIcon/></IconButton>
            <BasicModal title={'Delete Todo'} open={open} handleOpenClose={handleOpenClose}>
                <Stack paddingTop={"10px"} direction={"column"} spacing={5} justifyContent={"space-evenly"}>
                    <div>Do you really want remove this task? <b>"{todoName}"</b> will be deleted</div>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Button variant={'contained'} color={'primary'} onClick={handleOpenClose}>Cancel</Button>
                        <Button variant={'contained'} color={'error'} onClick={deleteCardHandler}>Delete</Button>
                    </Stack>
                </Stack>
            </BasicModal>
        </div>
    );
};
