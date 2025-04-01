import { DOG_API_URLS, STATE_API_URLS } from "./urls"

export const fetchAllDogsApi = async () => {
    return fetch(DOG_API_URLS.all).then((res) => res.json())
}

export const fetchDogByBreed = async (breed?: string) => {
    return fetch(DOG_API_URLS.breed(breed)).then((res) => res.json())
}


export const fetchStatesApi = async () => {
    return fetch(STATE_API_URLS.all).then((res) => res.json())
}