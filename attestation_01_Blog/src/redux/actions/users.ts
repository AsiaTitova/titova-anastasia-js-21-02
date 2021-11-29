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
  POSTS_USER,
} from '../../constants/constants';
import {PostType, UserType} from '../../types/types';
import { UsersAction } from '../../types/actions';
import {createUser, getUserById, getUserList, getUsersPostById} from '../../api/dumMyApi';
import {PostListState} from "../../types/state";

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

const loadPostsCurrentUserSuccessAction = (posts: any, page: number, limit: number, total: number): UsersAction => ({
  type: POSTS_USER,
  posts: posts,
  total: total,
  page: page,
  limit: limit,
  loading: false,
  error: '',
});

const loadCurrentUserSuccessAction = (user: UserType): UsersAction => ({
  type:  USERS_GET,
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
    getUserById(id, (resp: UserType) => {
      dispatch(loadCurrentUserSuccessAction(resp));
    }, (error: any) => dispatch(loadErrorAction(error)))
  };
};

export const loadUserPosts = (id: string, pageNum: number, pageSize: number): any => {
  return (dispatch: Dispatch) => {
    dispatch(showLoadingAction());
    getUsersPostById(id, pageNum, pageSize, (resp: any) => {
      dispatch(loadPostsCurrentUserSuccessAction(resp.data, resp.page, resp.limit, resp.total));
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

