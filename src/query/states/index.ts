/**
 * @file
 * This file only hold necessary information for the query
 * like: Options, QueryKey, QueryFn, invalidateFn, removeFn, client etc..
 */

import { queryOptions } from "@tanstack/react-query";
import { queryClient } from "../../utils";
import { formatQueryFn } from "./utils";
import { StatesTypes } from "./types";

export const statesQueryClient = queryClient

export const getStateQueryOption = <T,>(select?: (data: StatesTypes) => T) => queryOptions({
    queryKey: ['states'],
    queryFn: formatQueryFn,
    staleTime: 1000 * 30, // 30sec
    select
})

export const invalidateDogQuery = () => {
    statesQueryClient.invalidateQueries({
        queryKey : getStateQueryOption().queryKey
    })
}

export const getDogsFromCache = () => {
    statesQueryClient.getQueryData(getStateQueryOption().queryKey)
}

