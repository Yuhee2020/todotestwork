import React from 'react';
import {Todolist} from "./components/todolist/Todolist";
import {useAppSelector} from "./hooks/hooks";
import {Backdrop, CircularProgress} from "@mui/material";
import {ErrorSnackbar} from "./components/common/errorSnackbar/ErrorSnackbar";
import s from "./App.module.scss"
import {getAppStatus} from "./selectors";


function App() {
    const status = useAppSelector(getAppStatus)
    return (
        <div className={s.app}>
            <Backdrop open={status === 'loading'} sx={{color: '#fff', zIndex: 10}}>
                <CircularProgress color="inherit"/>
            </Backdrop>
            <Todolist/>
            <ErrorSnackbar/>
        </div>
    );
}

export default App;
