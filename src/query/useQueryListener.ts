/**
 * @description 
 * This function will fully responsible to keep the cache state synced with local redux
 */

import { hashKey, QueryClient, QueryKey } from "@tanstack/react-query";
import { useEffect } from "react";
import { useAppDispatch } from "../store";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

type Props<T> = {
  client: QueryClient;
  key: QueryKey;
  listener?: {
    type?: "redux";
    action: ActionCreatorWithPayload<T>;
    buildPayload?: (data : unknown) => T
  };
};

const useQueryListener = <T,>({ client, key, listener }: Props<T>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!client || !key) return;

    const unsubscribe = client.getQueryCache().subscribe((event) => {
      if (
        ["updated", "added", "removed", "observerOptionsUpdated"].includes(
          event.type
        )
      ) {
        if (event.query.queryHash === hashKey(key) && listener?.action) {
          const data = listener?.buildPayload ? listener?.buildPayload(event.query.state.data) : event.query.state.data;
          dispatch(listener?.action(data));
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, [client, dispatch, key, listener]);

  const invalidateQuery = () => {
    client.invalidateQueries({
      queryKey: key
    });
  }

  const removeQuery = () => {
    client.removeQueries({
      queryKey: key
    });
  }
  

  return {
    invalidateQuery,
    removeQuery
  };
};

export default useQueryListener;
