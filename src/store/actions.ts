import { createAction } from "@reduxjs/toolkit";

export const addDogs = createAction<{list : string[]}>("addDogs")
export const addBreed = createAction<{breed : string, image: string}>("addBreed")