import { call } from 'redux-saga/effects'
import axios from 'axios'



function createAxios() {
    return axios.create({})
}

const HttpService = createAxios()


function* doHttpCall(method, url, request, successHandler, errorHandler) {
    try {
        let res;
        switch (method) {
            case 'GET':
                res = yield call(() => HttpService.get(url), null);
                break;
            case 'POST':
                res = yield call(() => HttpService.post(url, request), null);
                break;
        }
        const response = res;
        if (successHandler) yield successHandler(response)
    } catch (error) {
        if (errorHandler) yield errorHandler(error)
    }
}



export function* httpGet(url, successHandler, errorHandler) {
    yield doHttpCall('GET', url, null, successHandler, errorHandler)
}

export function* httpPost(url, request, successHandler, errorHandler) {
    yield doHttpCall('POST', url, request, successHandler, errorHandler)
}