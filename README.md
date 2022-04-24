# ts-react-redux

Redux Saga 구성 (reactjs toolkit + next-redux-wrapper)

기존 `redux` 라이브러리의 `createStore` 가 dprecated 되었길래 `@reactjs/toolkit` 을 이용해보았는데 Action, Action Creator, Reducer 까지 알아서 전부 구성해주니 **매우매우** 편하다. `createSlice` 를 사용하면 Ducks 디자인 패턴을 개발자가 따를 것도 없이 라이브러리에서를 통해 알아서 구성해준다.

비동기/동기를 다루기에는 Saga 가 더 편한 것 같은데 코드 구성을 깔끔하게 하는건 어쩌면 Thunk 가 좀 더 편한듯