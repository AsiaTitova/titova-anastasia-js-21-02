/* eslint-disable */
import { Dispatch } from 'redux';
import {
  USERS_LOAD,
  USERS_ERROR,
  USERS_LIST_GET_SUCCESS,
  USERS_GET,
  AVATAR_UPLOAD,
  POSTS_USER,
} from '../../constants/constants';
import { UserType } from '../../types/types';
import { UsersAction } from '../../types/actions';
import {
  createUser,
  getUserById,
  getUserList,
  getUsersPostById,
  updateUser,
} from '../../api/dumMyApi';

const showLoadingAction = (): UsersAction => ({
  type: USERS_LOAD,
  loading: true,
});

const loadErrorAction = (error: string): UsersAction => ({
  type: USERS_ERROR,
  loading: false,
  error,
});

const loadUserListSuccessAction = (users: Array<UserType>, total: number, page: number, limit: number, error?: string): UsersAction => ({
  type: USERS_LIST_GET_SUCCESS,
  users,
  total,
  page,
  limit,
  loading: false,
  error,
});

const loadPostsCurrentUserSuccessAction = (posts: any, page: number, limit: number, total: number, error?: string): UsersAction => ({
  type: POSTS_USER,
  posts,
  total,
  page,
  limit,
  loading: false,
  error,
});

const loadCurrentUserSuccessAction = (user: UserType, error?: string): UsersAction => ({
  type: USERS_GET,
  user,
  loading: false,
  error,
});

export const uploadAvatarAction = (id: string, avatar: Blob, error?: string): UsersAction => ({
  type: AVATAR_UPLOAD,
  id,
  avatar,
  error,
});

export const loadUserList = (pageNum: number, pageSize: number): any => async (dispatch: Dispatch) => {
  try {
    dispatch(showLoadingAction());
    const resp = await getUserList(pageNum, pageSize);
    const data = JSON.parse(resp);
    dispatch(loadUserListSuccessAction(data.data, data.total, data.page, data.limit));
  } catch (error: any) {
    dispatch(loadErrorAction(error.message));
  }
};

export const getCurrentUser = (id: string): any => async (dispatch: Dispatch) => {
  try {
    dispatch(showLoadingAction());
    const resp = await getUserById(id);
    const data = JSON.parse(resp);
    dispatch(loadCurrentUserSuccessAction(data));
  } catch (error: any) {
      dispatch(loadErrorAction(error.message));
  }
};

export const loadUserPosts = (id: string, pageNum: number, pageSize: number): any => async (dispatch: Dispatch) => {
  try {
    dispatch(showLoadingAction());
    const resp = await getUsersPostById(id, pageNum, pageSize)
    const data = JSON.parse(resp);
    dispatch(loadPostsCurrentUserSuccessAction(data.data, data.page, data.limit, data.total));
  } catch (error: any) {
      dispatch(loadErrorAction(error.message));
  }
};

export const createNewUser = (body: UserType): any => async (dispatch: Dispatch) => {
  try {
    dispatch(showLoadingAction());
    const resp = await createUser(body);
    const data = JSON.parse(resp);
    dispatch(loadCurrentUserSuccessAction(data));
    window.localStorage.setItem('user', JSON.stringify(data));
    window.localStorage.setItem('user_id', JSON.stringify(data.id));
    window.localStorage.setItem('auth', JSON.stringify(true));
    const route = window.location.origin;
    window.location.href = `${route}/user/${data.id}`;

  } catch (error: any) {
      dispatch(loadErrorAction(error.message));
  }
};

export const updateCurrentUser = (body: UserType, id: string): any => async (dispatch: Dispatch) => {
  try {
    dispatch(showLoadingAction());
    const resp = await updateUser(body, id);
    const data = JSON.parse(resp);
    dispatch(loadCurrentUserSuccessAction(data));
  } catch (error: any) {
      dispatch(loadErrorAction(error.message));
  }
};
