/* eslint-disable */

import { Dispatch } from 'redux';
import { PostsAction } from "../../types/actions";
import { PostType } from '../../types/types';
import {
  POSTS_LOADING, LOAD_POSTS_ERROR, LOAD_POSTS_SUCCESS,
} from '../../constants/constants';

import { getPostList } from "../../api/dumMyApi";

const loadSuccessAction = (posts: Array<PostType>): PostsAction => ({
  type: LOAD_POSTS_SUCCESS,
  posts: posts,
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
});

export const load = (pageNum: number, pageSize: number) => {
  return (dispatch: Dispatch) => {
    dispatch(showLoadingAction());
    getPostList(pageNum, pageSize)
      .then((resp: any) => dispatch(loadSuccessAction(resp)))
      .catch((error: any) => dispatch(loadErrorAction(error)))
  };
};
