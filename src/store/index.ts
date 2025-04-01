import { configureStore } from "@reduxjs/toolkit";
import { dogReducer, stateReducer } from "./reducer";
import { useDispatch, useSelector } from "react-redux";


export const store = configureStore({
    reducer : {
        dogReducer: dogReducer,
        stateReducer: stateReducer
    },
    devTools: true,
})


export type StoreType = ReturnType<typeof store.getState>
export const useAppSelector = useSelector<StoreType>
export const useAppDispatch = useDispatch<typeof store.dispatch>