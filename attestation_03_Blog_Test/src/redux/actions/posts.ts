/* eslint-disable */
import { Dispatch } from 'redux';
import { PostsAction } from '../../types/actions';
import { PostType } from '../../types/types';
import {
  POSTS_LOADING,
  LOAD_POSTS_ERROR,
  LOAD_POSTS_SUCCESS,
  SET_LIMIT, SET_PAGE,
  GET_CURRENT_POSTS_SUCCESS,
} from '../../constants/constants';
import { getPostById, getPostList } from '../../api/dumMyApi';

const loadSuccessAction = (posts: Array<PostType>, total: number, page: number, limit: number): PostsAction => ({
  type: LOAD_POSTS_SUCCESS,
  posts,
  total,
  page,
  limit,
  loading: false,
  error: '',
});

const loadCurrentPostSuccessAction = (currentPost: PostType): PostsAction => ({
  type: GET_CURRENT_POSTS_SUCCESS,
  post: currentPost,
  loading: false,
  error: '',
});

const loadErrorAction = (error: string): PostsAction => ({
  type: LOAD_POSTS_ERROR,
  loading: false,
  error,
});

const showLoadingAction = () => ({
  type: POSTS_LOADING,
  loading: true,
});

const setLimitAction = (limit: number): PostsAction => ({
  type: SET_LIMIT,
  limit,
});

const setPageAction = (page: number): PostsAction => ({
  type: SET_PAGE,
  page,
});

export const updatePageNumber = (pageNum: number, pageSize: number): any => async (dispatch: Dispatch) => {
  try {
  dispatch(setLimitAction(pageSize));
  dispatch(setPageAction(pageNum));
    const resp = await getPostList(1, 12)
    const data = JSON.parse(resp);
    dispatch(loadSuccessAction(data.data, data.total, data.page, data.limit));
  } catch (error: any) {
    dispatch(loadErrorAction(error.message));
  }
};

export const load = (pageNum: number, pageSize: number): any => async (dispatch: Dispatch) => {
  try {
    dispatch(showLoadingAction());
    const resp = await getPostList(pageNum, pageSize);
    const data = JSON.parse(resp);
    dispatch(loadSuccessAction(data.data, data.total, data.page, data.limit));
  } catch (error: any) {
    dispatch(loadErrorAction(error.message));
  }
};

export const loadCurrentPost = (id: string): any => async (dispatch: Dispatch) => {
  try {
    dispatch(showLoadingAction());
    const resp = await getPostById(id);
    const data = JSON.parse(resp);
    dispatch(loadCurrentPostSuccessAction(data));
  } catch (error: any) {
    dispatch(loadErrorAction(error.message));
  }
};
