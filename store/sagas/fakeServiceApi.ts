import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
    FakePayload,
    fetchJsonSuccess,
    fetchJsonFail,
    fetchJson,
}
from '../reducers/fakeService'

function retrieveApi(data: FakePayload) {
    return axios.get(`https://jsonplaceholder.typicode.com/todos/${data.idx}`)
}

function* fetch(action: PayloadAction<FakePayload>): Generator {
    try {
        // fork 는 비동기 call 은 동기
        // fork 를 쓰면 불러온 것들을 result 에 넣어줘야 하는데 바로 다음 코드가 실행됨
        const result: any = yield call(retrieveApi, action.payload);
        yield put(fetchJsonSuccess(result.data))
    } catch (e) {
        yield put(fetchJsonFail(e))
    }
}
  
// Watch
export function* watchFakeSaga() {
    yield takeEvery(fetchJson, fetch)
}