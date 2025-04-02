import { generateAppQuery } from ".."
import { fetchStatesApi } from "../../api"
import { StatesTypes } from "../../api/types"
import { addStates } from "../../store/actions"

export const getStateQuery = <T>(props ?: {
    options?: Omit<T , "queryKey" | "queryFn">
    // ... more options as props
}) => {
    return generateAppQuery<StatesTypes, T>({
        withPersist : false,
        options : {
            queryKey: ["states"],
            queryFn: fetchStatesApi,
            ...props?.options,
        },
        listener : {
            action: addStates
        }
    })
}