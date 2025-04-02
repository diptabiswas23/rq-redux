import {
  DefaultOptions,
  QueryClient,
  FetchQueryOptions,
  QueryKey,
  Updater,
  FetchInfiniteQueryOptions,
} from "@tanstack/react-query";
import {
  ExtractGenerateAppQueryOptionDataType,
  GenerateAppQueryOptionsProperties,
} from "./types";
import QueryAppObserver from "./queryAppObserver";

export const defaultOption: DefaultOptions["queries"] = {
  staleTime: 1000 * 60 * 1, // 1minutes
  gcTime: 1000 * 60 * 5, // 5minutes
  retry: false,
  refetchOnWindowFocus: false,
};
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: defaultOption,
  },
});

export const generateAppQuery = <
  QueryData = unknown,
  T = FetchQueryOptions<QueryData>
>({
  withPersist = false,
  options,
  listener,
}: GenerateAppQueryOptionsProperties<T, QueryData>) => {
  const client = withPersist ? queryClient : queryClient;
  const key = options?.queryKey as QueryKey;
  const _options = {
    ...defaultOption,
    ...options,
  } as T;

  // This will subscribe to SyncReduxStore
  QueryAppObserver.subscribe(key, client, listener?.action);

  return {
    options: _options,
    client,
    key,
  };
};

type AppQuery<P, T> = ReturnType<typeof generateAppQuery<P, T>>;

export const invalidateQueries = <T, P>(query: AppQuery<P, T>) => {
  return query.client.invalidateQueries({
    queryKey: query.key,
  });
};
export const getQueryData = <T, P>(query: AppQuery<P, T>) => {
  return query.client.getQueryData(query.key);
};
export const setQueryData = <T, P, U>(
  query: AppQuery<P, T>,
  updater: Updater<ExtractGenerateAppQueryOptionDataType<T>, U>
) => {
  return query.client.setQueryData(query.key, updater);
};
export const cancelQueries = <T, P>(query: AppQuery<P, T>) => {
  return query.client.cancelQueries({ queryKey: query.key, exact: true });
};
export const removeQueries = <T, P>(query: AppQuery<P, T>) => {
  return query.client.removeQueries({ queryKey: query.key, exact: true });
};
export const resetQueries = <T, P>(query: AppQuery<P, T>) => {
  return query.client.resetQueries({ queryKey: query.key, exact: true });
};
export const fetchQuery = <T, P>(query: AppQuery<P, T>) => {
  return query.client.fetchQuery(query.options as FetchQueryOptions);
};
export const fetchInfiniteQuery = <T, P>(query: AppQuery<P, T>) => {
  return query.client.fetchInfiniteQuery(
    query.options as FetchInfiniteQueryOptions
  );
};
