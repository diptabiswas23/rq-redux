import { QueryObserver, useQuery } from "@tanstack/react-query";
import useQueryListener from "../useQueryListener";
import {  addStates } from "../../store/actions";
import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { getStateQueryOption, statesQueryClient } from ".";
import { StatesTypes } from "./types";
import { useAppSelector } from "../../store";
import { QueryAppObserver } from "../../utils/QueryAppObserver";
import { queryClient } from "../../utils";

type Props<T> = {
  select?: (data:StatesTypes) => T
} | undefined



export const useStatesQueryV1 = <T,>(props?: Props<T>) => {

  const options = useMemo(() => getStateQueryOption<T>(props?.select), [props?.select]);
  const { isLoading, isFetching } = useQuery(options);


  const data = useAppSelector((state) => props?.select ? props.select(state.stateReducer.states) : state.stateReducer.states);
  // const data = useAppSelector((state) =>  state.stateReducer.states);
  const states = data as T



  // Sync with cache/persist store
  useQueryListener({
    client: statesQueryClient,
    key: options.queryKey,
    listener: {
      action: addStates,
    },
  });


  return {isLoading , isFetching , data: states}
};


export const useStatesQueryV2 = <T,>(props?: Props<T>) => {
  const options = useMemo(() => getStateQueryOption<T>(props?.select), [props?.select]);
  const [appObserver] = useState(new QueryAppObserver())


  useSyncExternalStore(useCallback((onStoreChange) => {
    const unsubscribe = appObserver.subscribe(onStoreChange)

    return () => {
      unsubscribe()
    }
  }, [appObserver]) , () => appObserver.state)


  // Sync with cache/persist store
  useQueryListener({
    client: statesQueryClient,
    key: options.queryKey,
    listener: {
      action: addStates,
    },
  });


  useEffect(() => {
    const unsubscribe = new QueryObserver(queryClient , options).subscribe((result) => {
      // console.log("RENDER: ,Subscribe", result)
      appObserver.update(result)
    })

    return () => {
      unsubscribe()
    }

  } , [appObserver, options])


  return appObserver.trackProperties({ isFetching: appObserver.state?.isFetching, isLoading: appObserver.state?.isLoading, data:appObserver.state?.data })
};


export default useStatesQueryV1;
