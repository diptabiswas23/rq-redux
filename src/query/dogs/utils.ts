/**
 * @description
 * Query util file that will hold all the changes related to 
 * Request/ Response, before API layer
 */

import { fetchAllDogsApi } from "../../api"
import { DogsApiOriginalResponse, DogsApiResponse } from "./types"

export const formatQueryFn = async (): Promise<DogsApiResponse> => {
    // Here modify Request
    const response: DogsApiOriginalResponse = await fetchAllDogsApi()
    // Here modify Response
    return {
        list :  Object.keys(response?.message ?? {})?.slice(0 ,10) ?? []
    }
}