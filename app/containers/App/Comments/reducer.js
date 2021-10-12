import produce from "immer";
import * as constant from './constants'



export const InitialState = {
    comment: [],
    error: null
}


const commentReducer = (state = InitialState, action) =>
    produce(state, draft => {
        switch (action.type) {

            case constant.GET_COMMENT_SUCCESS:
                draft.comment = [action.payload];
                break;

            case constant.GET_COMMENT_FAILURE:
                draft.error = action.error;
                break;
        }
    });



export default commentReducer;