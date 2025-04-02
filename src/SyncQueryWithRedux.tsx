import { PropsWithChildren, useEffect } from "react";
import { store } from "./store";
import { queryClient } from "./query";
import { hashKey, NotifyEventType } from "@tanstack/react-query";
import QueryAppObserver from "./query/queryAppObserver";

const QUERY_EVENTS = [
    "updated",
    "added",
    "removed",
    "observerOptionsUpdated",
  ] as NotifyEventType[];

  // TODO: redundant code needs to be optimized
const SyncQueryWithRedux = ({children} : PropsWithChildren) => {
  useEffect(() => {
    const unsubscribe = queryClient.getQueryCache().subscribe((event) => {
      if (QUERY_EVENTS.includes(event.type)) {
        const queryHash = event.query.queryHash;

        QueryAppObserver.listeners.forEach((obj, key) => {
          if (queryHash === hashKey(key) && obj?.action && queryClient === obj.client) {
            const data = event.query.state.data;
            store.dispatch(obj?.action(data));
          }
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);


  // useEffect(() => {
  //   // This is for persist client.
  //   const unsubscribe = queryClient.getQueryCache().subscribe((event) => {
  //     if (QUERY_EVENTS.includes(event.type)) {
  //       const queryHash = event.query.queryHash;

  //       QueryAppObserver.listeners.forEach((obj, key) => {
  //         if (queryHash === hashKey(key) && obj?.action && queryClient === obj.client) {
  //           const data = event.query.state.data;
  //           store.dispatch(obj?.action(data));
  //         }
  //       });
  //     }
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  return (<>{children}</>)
};

export default SyncQueryWithRedux;
