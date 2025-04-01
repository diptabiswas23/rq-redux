import { useCallback, useMemo } from 'react'
import { getStateQueryOption, statesQueryClient } from '.';
import { StatesTypes } from './types';

const useUpdateStateQuery = () => {

    const options = useMemo(() => getStateQueryOption(), []);

    const update = useCallback(() => {
        statesQueryClient.setQueryData(options.queryKey, (cacheData) => {

            if (cacheData) {

                const _data = [
                    {
                        name: "West Bengal",
                        type: "State",
                        details: {
                            "capital": "Kolkata",
                            "famousFor": "Tea Gardens, Literature"
                        },
                        children: []
                    }
                ] as StatesTypes
                // cacheData.push(..._data)
                return [...cacheData, ..._data]

            }

        })
    }, [options?.queryKey])

    return {
        update
    }
}

export default useUpdateStateQuery