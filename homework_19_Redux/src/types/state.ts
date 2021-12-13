/* eslint-disable */
import {ResponseError, UserListResponse, UserType} from './types';

export interface State {
  users: UserListState;
  user: UserState;
  userCreate: UserCreateState;
  loading?: boolean;
  error?: string;
}

export interface UserListState {
  users?: Array<UserType>;
  page?: number;
  limit?: number;
  total?: number;
  loading?: boolean;
  error?: string;
}

export interface UserState {
  currentUser: UserType;
  loading?: boolean;
  error?: string;
}

export interface UserCreateState {
  currentUser: UserType;
  loading?: boolean;
  error?: string;
}
