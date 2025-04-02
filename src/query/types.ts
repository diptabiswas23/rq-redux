import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from "@reduxjs/toolkit"
import { FetchInfiniteQueryOptions, FetchQueryOptions, QueryKey, UseInfiniteQueryOptions, UseQueryOptions } from "@tanstack/react-query"

export type AppQueryListenersType<P = unknown> = {
    key: QueryKey,
    action: ActionCreatorWithPayload<P, string> | ActionCreatorWithoutPayload<string>
}

export type ExtractGenerateAppQueryOptionDataType<T> = T extends GenerateAppQueryOptionsType<infer TQueryFnData> 
    ? TQueryFnData 
    : never;
export type GenerateAppQueryOptionsType<QueryData = unknown , OutputData = QueryData> = UseQueryOptions<QueryData , Error , OutputData> | UseInfiniteQueryOptions<QueryData , Error , OutputData> | FetchQueryOptions<QueryData,  Error , OutputData> | FetchInfiniteQueryOptions<QueryData, Error , OutputData>
export type GenerateAppQueryOptionsProperties<T , P = unknown> = {withPersist?: boolean, options: GenerateAppQueryOptionsType<P , T> , listener?: {action: AppQueryListenersType<P>["action"]}}
