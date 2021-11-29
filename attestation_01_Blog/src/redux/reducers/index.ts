/* eslint-disable */
import { combineReducers } from 'redux';
import posts from './posts';
import auth from './auth';
import users from "./users";

const rootReducer = combineReducers({
  posts: posts,
  auth: auth,
  users: users,
});

export default rootReducer;
