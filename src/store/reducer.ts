import { createReducer } from "@reduxjs/toolkit";
import { addStates } from "./actions";
import { StatesTypes } from "../api/types";

export const stateReducer = createReducer({
  states: [] as StatesTypes
}, (builder) => {
  builder.addCase(addStates, (state, action) => {
    state.states = action.payload;
  });
});
