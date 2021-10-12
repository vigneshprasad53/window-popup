import { all, takeLatest, put } from 'redux-saga/effects'
import * as actions from './actions'
import * as constant from './constants'
import { httpGet } from '../../../utils/HttpService'




function* getCommentRequest({ payload }) {

    const url = `https://jsonplaceholder.typicode.com/posts/${payload}`;

    function* successHandler(response) {
        const { data } = response
        yield put(actions.getCommentSuccess(data))
    }

    function* errorHandler(error) {
        yield put(actions.getCommentFailure(error))
    }

    yield httpGet(url, successHandler, errorHandler)

}


function* watchCommentSaga() {
    yield takeLatest(constant.GET_COMMENT_REQUEST, getCommentRequest)
}

export default function* rootSaga() {
    yield all([watchCommentSaga()])
}