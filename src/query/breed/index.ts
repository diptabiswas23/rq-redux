/**
 * @file
 * This file only hold necessary information for the query
 * like: Options, QueryKey, QueryFn, invalidateFn, removeFn, client etc..
 */

import { queryOptions } from "@tanstack/react-query";
import { queryClient } from "../../utils";
import { formatQueryFn } from "./utils";

export const breedQueryClient = queryClient

export const getBreedQueryOption = (breed?: string) => queryOptions({
    queryKey: ['breed', breed],
    queryFn: () => formatQueryFn(breed),
    staleTime: 1000 * 30, // 30sec
})



export const invalidateDogQuery = () => {
    breedQueryClient.invalidateQueries({
        queryKey : getBreedQueryOption().queryKey
    })
}

export const getDogsFromCache = () => {
    breedQueryClient.getQueryData(getBreedQueryOption().queryKey)
}


