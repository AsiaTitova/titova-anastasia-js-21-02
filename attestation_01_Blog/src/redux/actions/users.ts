/* eslint-disable */

import { Dispatch } from 'redux';
import {
  USERS_LOAD,
  USERS_ERROR,
  USERS_LIST_GET_SUCCESS,
  USERS_GET,
  USERS_CREATE,
  USERS_UPDATE,
  AVATAR_UPLOAD,
  POSTS_USER,
} from '../../constants/constants';
import { UserType } from '../../types/types';
import { UsersAction } from '../../types/actions';
import {createUser, getUserById, getUserList, getUsersPostById, updateUser} from '../../api/dumMyApi';

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

export const uploadAvatarAction = (id: string, avatar: Blob): UsersAction => ({
  type: AVATAR_UPLOAD,
  id,
  avatar,
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

export const updateCurrentUser = (body: UserType, id: string): any => {
  return (dispatch: Dispatch) => {
    dispatch(showLoadingAction());
    updateUser(body, id,(resp: any) => {
      dispatch(loadCurrentUserSuccessAction(resp));
    }, (error: any) => dispatch(loadErrorAction(error)))
  };
};

