/* eslint-disable */
import { combineReducers } from 'redux';
import users from "./users";
import user from './user';
import userCreate from "./userCreate";

const rootReducer = combineReducers({
  users: users,
  user: user,
  userCreate: userCreate
});

export default rootReducer;
