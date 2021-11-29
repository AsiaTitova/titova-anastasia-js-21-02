/* eslint-disable */

import { Dispatch } from 'redux';
import {
  USERS_LOAD,
  USERS_ERROR,
  USERS_LIST_GET_SUCCESS,
  USERS_GET,
  USERS_CREATE,
  USERS_UPDATE,
  SET_LIMIT,
  SET_PAGE,
} from '../../constants/constants';
import { UserType } from '../../types/types';
import { UsersAction } from '../../types/actions';
import { createUser, getUserById, getUserList } from '../../api/dumMyApi';

const showLoadingAction = (): UsersAction => ({
  type: USERS_LOAD,
  loading: true,
});

const loadErrorAction = (error: string): UsersAction => ({
  type: USERS_ERROR,
  loading: false,
  error: error,
});

const loadUserListSuccessAction = (users: Array<UserType>, total: number, page: number, limit: number): UsersAction => ({
  type: USERS_LIST_GET_SUCCESS,
  users: users,
  total: total,
  page: page,
  limit: limit,
  loading: false,
  error: '',
});

const loadCurrentUserSuccessAction = (user: UserType): UsersAction => ({
  type:  USERS_GET,
  avatar: '',
  user: user,
  loading: false,
  error: '',
});

const setLimitAction = (limit: number): UsersAction => ({
  type: SET_LIMIT,
  limit: limit,
});

const setPageAction = (page: number): UsersAction => ({
  type: SET_PAGE,
  page: page,
});


export const loadUserList = (pageNum: number, pageSize: number): any => {
  return (dispatch: Dispatch) => {
    dispatch(showLoadingAction());
    getUserList(pageNum, pageSize, (resp: any) => {
      dispatch(loadUserListSuccessAction(resp.data, resp.total, resp.page, resp.limit))
    }, (error: any) => dispatch(loadErrorAction(error)))
  };
};

export const getCurrentUser = (id: string): any => {
  return (dispatch: Dispatch) => {
    dispatch(showLoadingAction());
    getUserById(id, (resp: any) => {
      dispatch(loadCurrentUserSuccessAction(resp));
    }, (error: any) => dispatch(loadErrorAction(error)))
  };
};

export const createNewUser = (body: UserType): any => {
  return (dispatch: Dispatch) => {
    dispatch(showLoadingAction());
    createUser(body,(resp: any) => {
      dispatch(loadCurrentUserSuccessAction(resp));
    }, (error: any) => dispatch(loadErrorAction(error)))
  };
};

