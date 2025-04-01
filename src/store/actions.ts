import { createAction } from "@reduxjs/toolkit";
import { StatesTypes } from "../query/states/types";

export const addDogs = createAction<{list : string[]}>("addDogs")
export const addBreed = createAction<{breed : string, image: string}>("addBreed")

export const addStates = createAction<StatesTypes>("addStates")
