import { createAction } from "@reduxjs/toolkit";
import { StatesTypes } from "../api/types";

export const addStates = createAction<StatesTypes>("addStates")
