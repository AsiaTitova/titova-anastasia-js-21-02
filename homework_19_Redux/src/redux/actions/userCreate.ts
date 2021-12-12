/* eslint-disable */
import { Dispatch } from 'redux';
import {
  LOAD_USERS,
  CREATE_USER_SUCCESS,
  ERROR_USERS,
} from '../../constants/constants';
import { UserType } from '../../types/types';
import { getUsersActionType } from '../../types/actions';


export const loadUsersAction = (): getUsersActionType => ({
  type: LOAD_USERS,
  loading: true,
  error: "",
});

export const successCreateUserActions = (user: UserType): getUsersActionType => ({
  type: CREATE_USER_SUCCESS,
  payload: user,
  loading: false,
  error: "",
});

const errorUsersAction = (error: string): getUsersActionType => ({
  type: ERROR_USERS,
  loading: false,
  error,
});
