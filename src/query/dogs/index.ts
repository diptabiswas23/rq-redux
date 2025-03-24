/**
 * @file
 * This file only hold necessary information for the query
 * like: Options, QueryKey, QueryFn, invalidateFn, removeFn, client etc..
 */

import { queryOptions } from "@tanstack/react-query";
import { queryClient } from "../../utils";
import { formatQueryFn } from "./utils";

export const dogQueryClient = queryClient

export const getDogQueryOption = () => queryOptions({
    queryKey: ['dogs'],
    queryFn: formatQueryFn,
    staleTime: 1000 * 30, // 30sec
})



export const invalidateDogQuery = () => {
    dogQueryClient.invalidateQueries({
        queryKey : getDogQueryOption().queryKey
    })
}

export const getDogsFromCache = () => {
    dogQueryClient.getQueryData(getDogQueryOption().queryKey)
}

