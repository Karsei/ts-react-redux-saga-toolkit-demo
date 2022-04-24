import { call, put } from 'redux-saga/effects';

export interface ActionCreator {
    [index: string]: any,
    type: string,
    data?: any,
    payload?: any,
    error?: any,
}

export interface CommonStore {
    data: any,
    loading: boolean,
    error: boolean,
}

/**
 * 특정 Action 의 성공 및 실패의 Action 문자열을 생성합니다.
 * @param type Action 문자열
 * @returns 성공 및 실패 시의 각 Action 문자열을 담은 객체
 */
export const createActionString = (type: string) => {
    return { success: `${type}_SUCCESS`, fail: `${type}_FAIL` }
}

/**
 * Saga 를 실행합니다.
 * @param type Action 문자열
 * @param promiseCreator 실행할 Promise 함수
 * @returns CommonStore 인터페이스를 가진 store 에 저장할 데이터
 */
export const createPromiseSaga = (type: string, promiseCreator: any) => {
    const { success, fail } = createActionString(type)
    
    return function* (action: ActionCreator): Generator {
        try {
            const response = yield call(promiseCreator, action.payload)
            yield put({ 
                type: success,
                payload: response,
            })
        } catch (err: any) {
            yield put({
                type: fail,
                payload: err,
                error: true,
            })
        }
    }
}

/**
 * 비동기로 실행된 Action 의 결과를 생성합니다.
 * @param param0 ActionCreator 인터페이스를 가진 객체
 * @param prevData 로딩 시 기존 데이터
 * @returns CommonStore 인터페이스를 가진 store 에 저장할 데이터
 */
export const handleAsyncAction = ({ type = '', payload = {} }, prevData = null) => { 
    if (type.includes('SUCCESS')) return reducerUtils.success(payload)
    if (type.includes('FAIL')) return reducerUtils.error(payload)
    return reducerUtils.loading(prevData)
}

export const reducerUtils = {
    init: () => ({
        data: null,
        loading: false,
        error: false
    } as CommonStore),

    loading: (prevData = null) => ({
        data: prevData,
        loading: true,
        error: false
    } as CommonStore),

    success: (data = {}) => ({
        data: data,
        loading: false,
        error: false
    } as CommonStore),

    error: (error: any) => ({
        data: error,
        loading: false,
        error: true
    } as CommonStore),
}