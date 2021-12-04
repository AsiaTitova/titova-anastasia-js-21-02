/* eslint-disable */
import {ResponseError, UserListResponse, UserType} from './types';

export interface UserListState {
  userList: UserListResponse;
  isLoading: boolean;
}

export interface UserState {
  currentUser: UserType;
  isLoading: boolean;
}

export interface UserCreateState {
  currentUser: UserType;
  error: ResponseError;
  isLoading: boolean;
}
