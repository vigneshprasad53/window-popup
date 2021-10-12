import { createSelector } from "reselect";
import { InitialState } from "./reducer";


export const selectCommentReducer = state => state.comments || InitialState;



export const selectComments = () =>
    createSelector(selectCommentReducer,
        state => state.comment || []
    )