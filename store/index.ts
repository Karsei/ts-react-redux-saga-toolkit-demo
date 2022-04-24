import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'
import logger from 'redux-logger'
// Stores
import reducer from './reducers'
import rootSaga from './sagas'

const store = (context: any) => {
    const sagaMiddleware = createSagaMiddleware()
    const store = configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware).concat(logger),
        // toolkit 의 경우 devTools 같은 middleware 를 기본으로 제공함
        devTools: process.env.NODE_ENV !== 'production',
    })
    sagaMiddleware.run(rootSaga)

    return store
}

export const storeWrapper = createWrapper(store, {
    debug: process.env.NODE_ENV !== 'production',
})