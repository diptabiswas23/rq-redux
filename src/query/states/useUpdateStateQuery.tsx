import { useCallback,  useState } from 'react'
import { StatesTypes } from '../../api/types';
import { getStateQuery } from './getStateQuery';
import { setQueryData } from '..';
import { FetchQueryOptions } from '@tanstack/react-query';

const useUpdateStateQuery = () => {
    const [query] = useState(() => getStateQuery<FetchQueryOptions<StatesTypes>>());

    const update = useCallback(() => {
        setQueryData(query , (cacheData) => {

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

    }, [query])

    return {
        update
    }
}

export default useUpdateStateQuery