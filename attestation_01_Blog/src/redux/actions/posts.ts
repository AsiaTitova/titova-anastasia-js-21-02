/* eslint-disable */

import { Dispatch } from 'redux';
import { PostsAction } from "../../types/actions";
import { PostType } from '../../types/types';
import {
  POSTS_LOADING, LOAD_POSTS_ERROR, LOAD_POSTS_SUCCESS, SET_LIMIT, SET_PAGE,
} from '../../constants/constants';

import { getPostList } from "../../api/dumMyApi";

const loadSuccessAction = (posts: Array<PostType>, total: number, page: number, limit: number): PostsAction => ({
  type: LOAD_POSTS_SUCCESS,
  posts: posts,
  total: total,
  page: page,
  limit: limit,
  loading: false,
  error: '',
});

const loadErrorAction = (error: string): PostsAction => ({
  type: LOAD_POSTS_ERROR,
  loading: false,
  error: error,
});

const showLoadingAction = () => ({
  type: POSTS_LOADING,
  loading: true,
});

const setLimitAction = (limit: number): PostsAction => ({
  type: SET_LIMIT,
  limit: limit,
});

const setPageAction = (page: number): PostsAction => ({
  type: SET_PAGE,
  page: page,
});

export const updatePageNumber = (pageNum: number, pageSize: number): any => {
  return (dispatch: Dispatch) => {
    dispatch(setLimitAction(pageSize));
    dispatch(setPageAction(pageNum));
    getPostList(1, 10, (resp: any) => {
      dispatch(loadSuccessAction(resp.data, resp.total, resp.page, resp.limit))
    }, (error: any) => dispatch(loadErrorAction(error)));
  }
}

export const load = (pageNum: number, pageSize: number): any => {
  return (dispatch: Dispatch) => {
    dispatch(showLoadingAction());
    getPostList(pageNum, pageSize, (resp: any) => {
      dispatch(loadSuccessAction(resp.data, resp.total, resp.page, resp.limit))
    }, (error: any) => dispatch(loadErrorAction(error)))
  };
};
