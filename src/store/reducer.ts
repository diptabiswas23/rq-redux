import { createReducer } from "@reduxjs/toolkit";
import { addBreed, addDogs } from "./actions";

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
