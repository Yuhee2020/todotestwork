import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppStatusType} from "./types";



const slice = createSlice({
    name: "app",
    initialState:{
        appStatus: "idle" as AppStatusType,
        error: null as null | string,},
    reducers: {
        setAppStatus(state, action: PayloadAction<{ status: AppStatusType }>) {
            state.appStatus = action.payload.status
        },
        setAppError(state, action: PayloadAction<{ error: null | string }>) {
            state.error = action.payload.error
        },
    }
})

export const appReducer = slice.reducer
export const {setAppStatus, setAppError} = slice.actions
