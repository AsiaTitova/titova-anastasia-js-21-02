/* eslint-disable */
import { UserType } from './types';

export interface ActionType {
  type: string;
}

export interface getUsersActionType extends ActionType {
  payload?: UserType;
  loading?: boolean,
  error?: string,
}

export interface LoadUserActionType extends ActionType {
  users?: Array<UserType> | undefined;
  page?: number;
  limit?: number;
  total?: number;
  loading?: boolean,
  error?: string,
}

export interface CreateUserActionType extends ActionType {
  payload?: UserType;
  loading?: boolean,
  error?: string;
}
