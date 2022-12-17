import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, StateType} from "../store/types";

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector