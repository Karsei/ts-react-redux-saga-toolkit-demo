import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FakeStore {
    data: any,
    loading: boolean,
    error: boolean,
}

export interface FakePayload {
    idx: number,
}

const initialState: FakeStore = {
    data: '',
    loading: false,
    error: false,
}
const fakeSlice = createSlice({
    name: 'fakeStore',
    initialState,
    reducers: {
        fetchJson(state: FakeStore, action: PayloadAction<FakePayload>) {
            state.data = action.payload
            state.loading = true
            state.error = false
        },
        fetchJsonSuccess(state: FakeStore, action: PayloadAction<any>) {
            state.data = action.payload
            state.loading = false
            state.error = false
        },
        fetchJsonFail(state: FakeStore, action: PayloadAction<any>) {
            state.data = action.payload
            state.loading = false
            state.error = true
        },
    },
})

const {reducer, actions} = fakeSlice
export const {fetchJson, fetchJsonSuccess, fetchJsonFail} = actions
export default reducer