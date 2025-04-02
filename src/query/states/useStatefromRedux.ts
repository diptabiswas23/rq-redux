import { StoreType, useAppSelector } from "../../store";

type Props<T> = {
  select: (data: StoreType) => T 
}

const useStateFromRedux = <T,>({select}: Props<T>) => {
  const data = useAppSelector(select);
  return data as T;
};

export default useStateFromRedux;
