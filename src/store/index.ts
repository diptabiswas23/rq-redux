import { configureStore } from "@reduxjs/toolkit";
import {  stateReducer } from "./reducer";
import { useDispatch, useSelector } from "react-redux";


export const store = configureStore({
    reducer : {
        stateReducer: stateReducer
    },
    devTools: true,
})


export type StoreType = ReturnType<typeof store.getState>
export const useAppSelector = useSelector<StoreType>
export const useAppDispatch = useDispatch<typeof store.dispatch>