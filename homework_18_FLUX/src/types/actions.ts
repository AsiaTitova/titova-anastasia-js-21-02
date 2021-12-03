import { UserListResponse } from './types';

export interface ActionType {
  type: string;
}

export interface getUsersActionType extends ActionType {
  payload: string;
}

export interface LoadUserActionType extends ActionType {
  payload: UserListResponse;
}
