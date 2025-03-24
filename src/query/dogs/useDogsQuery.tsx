import { useQuery } from "@tanstack/react-query";
import { dogQueryClient, getDogQueryOption } from ".";
import useQueryListener from "../useQueryListener";
import { addDogs } from "../../store/actions";
import { useMemo } from "react";
import { useAppSelector } from "../../store";

const useDogsQuery = () => {
  const options = useMemo(() => getDogQueryOption(), []);
  const { isLoading, isFetching } = useQuery(options);

  const data = useAppSelector((state) => state.dogReducer.dogs);
  const list = data as {list : string[]}

  // Sync with cache/persist store
  useQueryListener({
    client: dogQueryClient,
    key: options.queryKey,
    listener: {
      action: addDogs,
    },
  });

  return { isFetching, isLoading, data: list };
};

export default useDogsQuery;
