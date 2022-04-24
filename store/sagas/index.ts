import { all, fork } from 'redux-saga/effects';
import { watchFakeSaga } from './fakeServiceApi';

export default function* rootSaga() {
    yield all([
        fork(watchFakeSaga),
    ])
}