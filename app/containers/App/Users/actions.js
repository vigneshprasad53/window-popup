import * as constant from './constants'



export const getUsersRequest = () => ({
    type: constant.GET_USERS_REQUEST
})
export const getUsersSuccess = (payload) => ({
    type: constant.GET_USERS_SUCCESS,
    payload
})
export const getUsersFailure = (error) => ({
    type: constant.GET_USERS_FAILURE,
    error
})

