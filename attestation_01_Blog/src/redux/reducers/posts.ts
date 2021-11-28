/* eslint-disable */
import produce from 'immer';
import { PostListState } from '../../types/state';
import { PostsAction } from "../../types/actions";
import {
  POSTS_LOADING, LOAD_POSTS_ERROR, LOAD_POSTS_SUCCESS,
} from '../../constants/constants';
import { PostType } from '../../types/types';

const initialState: PostListState = {
  posts: [],
  loading: false,
  error: '',
};

const showLoading = (draft: PostListState) => {
  draft.loading = true;
  return draft;
};

const loadSuccess = (draft: PostListState, resp?: Array<PostType>) => {
  draft.posts = resp || [];
  draft.loading = false;
  return draft;
};
const loadError = (draft: PostListState, e?: any) => {
  draft.loading = false;
  draft.error = e;
  return draft;
};

export default (state = initialState, action: PostsAction) => produce(
  state,
  (draft: PostListState) => {
    switch (action.type) {
      case POSTS_LOADING: return showLoading(draft);
      case LOAD_POSTS_SUCCESS: return loadSuccess(draft, action.posts);
      case LOAD_POSTS_ERROR: return loadError(draft, action.error);
      default: return state;
    }
  },
);
