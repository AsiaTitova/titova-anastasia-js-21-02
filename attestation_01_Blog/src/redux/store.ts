/* eslint-disable */
import { applyMiddleware, createStore } from 'redux';
import { useDispatch } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = (store: any) => (next: any) => (action: any) => {
  console.group(`${action.type} log`);
  console.log(action);
  console.log(store);
  console.groupEnd();
  next(action);
};

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, middleware)
);

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store;
