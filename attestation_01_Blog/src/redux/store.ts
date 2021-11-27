import { applyMiddleware, combineReducers, createStore } from 'redux';
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
  combineReducers(rootReducer),
  applyMiddleware(thunk, middleware),
);

export default store;
