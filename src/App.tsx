import React from 'react';
import './App.css';
import {Todolist} from "./components/todolist/Todolist";
import {useAppSelector} from "./hooks/hooks";
import {Backdrop, CircularProgress} from "@mui/material";
import {ErrorSnackbar} from "./components/common/errorSnackbar/ErrorSnackbar";


function App() {
    const status = useAppSelector((state) => state.app.appStatus)
    return (
        <div>
            <Backdrop open={status === 'loading'} sx={{color: '#fff', zIndex: 10}}>
                <CircularProgress color="inherit"/>
            </Backdrop>
            <Todolist/>
            <ErrorSnackbar/>
        </div>
    );
}

export default App;
