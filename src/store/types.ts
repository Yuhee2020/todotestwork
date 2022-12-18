import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {rootReducer} from "./store";

export type StateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<StateType, unknown, AnyAction>;


