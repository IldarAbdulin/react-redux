import { createStore } from "redux";

import {rootReducer} from './root-reducer';
import { loadState, saveState } from "./localStorage";
import { throttle } from "lodash";

export const cofigureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    })
  }))
  return store
}