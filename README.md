# ts-react-redux-saga-toolkit

Redux Saga 구성 (nextjs + redux-saga + @reduxjs/toolkit + next-redux-wrapper)

기존 `redux` 라이브러리의 `createStore` 가 *deprecated* 되어서 `@reduxjs/toolkit` 을 이용해본 것. Action, Action Creator, Reducer 까지 알아서 전부 구성해주니 매우 편하고, `createSlice` 를 사용하면 Ducks 디자인 패턴을 개발자가 따를 것도 없이 라이브러리에서 알아서 구성해준다.

`createSlice` 에 구성 시 reducer 에 Success/Fail 을 구성하는건 생각해봐야 할 것 같다.
