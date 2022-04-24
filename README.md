# ts-react-redux-saga-toolkit

Redux Saga 구성 (nextjs + redux-saga + @reduxjs/toolkit + next-redux-wrapper)

기존 `redux` 라이브러리의 `createStore` 가 *deprecated* 되었길래 `@reduxjs/toolkit` 을 이용해보았는데 Action, Action Creator, Reducer 까지 알아서 전부 구성해주니 **매우매우** 편하다. `createSlice` 를 사용하면 Ducks 디자인 패턴을 개발자가 따를 것도 없이 라이브러리에서를 통해 알아서 구성해준다.

다만, `createSlice` 에 구성 시 reducer 에 Success/Fail 에 대해서 자동으로 구성하게 하는건 생각해봐야 할 것 같다.

비동기/동기를 다루기에는 Saga 가 더 편한 것 같은데 코드 구성을 깔끔하게 하는건 어쩌면 Thunk 가 좀 더 편한듯