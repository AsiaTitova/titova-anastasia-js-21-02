/* eslint-disable */
import { ResponseError, UserListResponse, UserType } from './types';

export interface ActionType {
  type: string;
}

export interface getUsersActionType extends ActionType {
  payload: UserType;
}

export interface LoadUserActionType extends ActionType {
  payload: UserListResponse;
}

export interface CreateUserActionType extends ActionType {
  payload: UserType;
  error: ResponseError;
}
