/**
 * @description
 * Query util file that will hold all the changes related to 
 * Request/ Response, before API layer
 */

import {  fetchStatesApi } from "../../api"
import {  StatesTypes } from "./types"

export const formatQueryFn = async (): Promise<StatesTypes> => {
    // Here modify Request
    const response: StatesTypes = await fetchStatesApi()
    // Here modify Response
    return response
}