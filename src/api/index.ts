import { StatesTypes } from "./types"
import {STATE_API_URLS } from "./urls"


async function transformData(res: Response) {
    return await res.json() as StatesTypes
}


export const fetchStatesApi = async () => {
    return fetch(STATE_API_URLS.all).then((res) => transformData(res))
}