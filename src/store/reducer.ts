import { createReducer } from "@reduxjs/toolkit";
import { addBreed, addDogs, addStates } from "./actions";
import { StatesTypes } from "../query/states/types";

const initialState = {
  dogs: {
    list: [] as string[],
    breedImages: {} as Record<string, string>,
  },

};

export const dogReducer = createReducer(initialState, (builder) => {
  builder.addCase(addDogs, (state, action) => {
    state.dogs.list = action.payload.list;
  });
  builder.addCase(addBreed, (state, action) => {
    state.dogs.breedImages[action.payload.breed] = action.payload.image;
  });
});


export const stateReducer = createReducer({
  states: [] as StatesTypes
}, (builder) => {
  builder.addCase(addStates, (state, action) => {
    state.states = action.payload;
  });
});
