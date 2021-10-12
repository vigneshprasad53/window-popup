import * as constant from './constants'


export const getCommentRequest = (payload) => ({
    type: constant.GET_COMMENT_REQUEST,
    payload
})

export const getCommentSuccess = (payload) => ({
    type: constant.GET_COMMENT_SUCCESS,
    payload
})

export const getCommentFailure = (error) => ({
    type: constant.GET_COMMENT_FAILURE,
    error
})