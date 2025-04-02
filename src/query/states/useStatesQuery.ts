import { useState } from "react";
import { getStateQuery } from "./getStateQuery";
import {  useQuery, UseQueryOptions } from "@tanstack/react-query";
import { StatesTypes } from "../../api/types";

type Props<T> = {
  select?: (data:StatesTypes) => T
} | undefined


const useStatesQuery = <T = StatesTypes,>(props?: Props<T>) => {
  const [query] = useState(() => getStateQuery<UseQueryOptions<StatesTypes , Error, T>>({
    options: {
      select: props?.select
    }
  }));
  return useQuery(query.options)
};

export default useStatesQuery;
