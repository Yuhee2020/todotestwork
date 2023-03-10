import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as React from "react";
import {ReactNode} from "react";
import {IconButton, Stack} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import s from "./BasicModal.module.scss"


type PropsType={
    title:string
    children:ReactNode
    open:boolean
    handleOpenClose:()=>void
}

export const BasicModal=({children, title,open,handleOpenClose }:PropsType)=> {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleOpenClose}
            >
                <Box className={s.box}>
                    <Stack direction="row" spacing={0}
                           justifyContent={'space-between'} borderBottom={'1px solid #D9D9D9'}
                           marginBottom={'16px'} >
                        <Typography id="modal-modal-title" variant="h5" fontWeight={'bold'}>
                            {title}
                        </Typography>
                        <IconButton onClick={handleOpenClose} style={{padding: 'none'}}>
                            <CloseIcon/>
                        </IconButton>
                    </Stack>
                    <div>
                        {children}
                    </div>
                </Box>
            </Modal>
        </div>
    );
}