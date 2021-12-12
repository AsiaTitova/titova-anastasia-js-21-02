/* eslint-disable */
import { Dispatch } from 'redux';
import { LOAD_USERS, GET_USERS, ERROR_USERS } from '../../constants/constants';
import {UserListResponse, UserType} from '../../types/types';
import { LoadUserActionType } from '../../types/actions';
import { getUserList } from '../../api/dumMyApi';

export const loadUsersAction = (): LoadUserActionType => ({
  type: LOAD_USERS,
  loading: true,
  error: "",
});

export const successUsersActions = (users: Array<UserType>, total: number, page: number, limit: number,): LoadUserActionType => ({
  type: GET_USERS,
  users,
  total,
  page,
  limit,
  loading: false,
  error: "",
});

const errorUsersAction = (error: string): LoadUserActionType => ({
  type: ERROR_USERS,
  loading: false,
  error,
});
