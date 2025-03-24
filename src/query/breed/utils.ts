/**
 * @description
 * Query util file that will hold all the changes related to 
 * Request/ Response, before API layer
 */

import {  fetchDogByBreed } from "../../api"
import { BreedOriginalResponse } from "./types"
import { BreedResponse } from "./types"

export const formatQueryFn = async (breed?: string): Promise<BreedResponse> => {
    // Here modify Request
    const response: BreedOriginalResponse = await fetchDogByBreed(breed)
    // Here modify Response
    return response.message
}