import { createSelector } from "reselect"
import { InitialState } from "./reducer"


export const selectState = state => state.users || InitialState;


export const selectUsers = () =>
    createSelector(selectState,
        users => users.usersContent || []
    )