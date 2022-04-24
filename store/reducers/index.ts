import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux'
import fakeService from './fakeService'

const rootReducer = combineReducers({
    fakeService,
})

const reducer = (state: any, action: any) => {
    switch (action.type) {
        // HYDRATE 는 서버에서 생성된 Redux Store 를 클라이언트에서도 사용할 수 있도록 전달해 주는 역할
        // getInitialProps 와 getServerSideProps 에서도 Redux store 에 접근 가능
        case HYDRATE:
            return {
                ...state,
                ...action.payload,
            }
        default: {
            return rootReducer(state, action);
        }
    }
};

export default reducer

// useSelector 형식을 위함
export type RootState = ReturnType<typeof rootReducer>