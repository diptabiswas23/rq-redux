import { useQuery } from "@tanstack/react-query";
import { breedQueryClient, getBreedQueryOption } from ".";
import useQueryListener from "../useQueryListener";
import { useMemo } from "react";
import { addBreed } from "../../store/actions";
import { useAppSelector } from "../../store";

type Props = {
  breed?: string;
};

const useBreedQuery = ({ breed = "" }: Props) => {
  const option = useMemo(() => getBreedQueryOption(breed), [breed])
  const { isFetching, isLoading } = useQuery(option);

  const data = useAppSelector(state => state.dogReducer.dogs.breedImages[breed])


  // Sync with cache/persist store
  useQueryListener({
    client: breedQueryClient,
    key: option.queryKey,
    listener: {
      action: addBreed,
      buildPayload: (data) => ({
        breed: breed ?? "",
        image: data as string
      })
    },
  });

  return { data, isFetching, isLoading };
};

export default useBreedQuery;
