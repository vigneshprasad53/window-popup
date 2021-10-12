import produce from "immer";
import * as constant from './constants'


export const InitialState = {
    usersContent: [],
    failure: null
}


const usersReducer = (state = InitialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case constant.GET_USERS_SUCCESS:
                draft.usersContent = action.payload;
                break;

            case constant.GET_USERS_FAILURE:
                draft.failure = action.error;
                break;
        }
    });




export default usersReducer;