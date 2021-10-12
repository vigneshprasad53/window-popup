import { all, takeLatest, put } from 'redux-saga/effects'
import * as actions from './actions'
import * as constant from './constants'
import { httpGet } from '../../../utils/HttpService'


function* getUsersRequest() {
    const url = 'https://jsonplaceholder.typicode.com/users'


    function* successHandler(response) {
        const { data } = response
        yield put(actions.getUsersSuccess(data))
    }

    function* errorHandler(error) {
        yield put(actions.getUsersFailure(error))
    }


    yield httpGet(url, successHandler, errorHandler)
}



function* watchUsersSaga() {
    yield takeLatest(constant.GET_USERS_REQUEST, getUsersRequest)
}


export default function* rootSaga() {
    yield all([watchUsersSaga()])
}