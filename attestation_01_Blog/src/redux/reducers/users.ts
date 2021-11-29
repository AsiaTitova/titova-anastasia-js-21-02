/* eslint-disable */
import produce from 'immer';
import { UserListState } from '../../types/state';
import { UsersAction } from "../../types/actions";
import {
  USERS_LOAD, USERS_ERROR, USERS_LIST_GET_SUCCESS, USERS_CREATE, USERS_UPDATE, SET_LIMIT, SET_PAGE,
} from '../../constants/constants';
import {PostType, UserType} from '../../types/types';

const initialState: UserListState = {
  users: [],
  user: {},
  page: 0,
  limit: 12,
  total: 0,
  loading: false,
  error: '',
};

const showLoading = (draft: UserListState) => {
  draft.loading = true;
  return draft;
};

const setPage = (draft: UserListState, page?: number) => {
  draft.page = page;
  return draft;
}

const setLimit = (draft: UserListState, limit?: number) => {
  draft.limit = limit;
  return draft;
}

const loadSuccess = (draft: UserListState, resp?: Array<UserType>, total?: number, page?: number, limit?: number) => {
  draft.users = resp || [];
  draft.page = page;
  draft.limit = limit;
  draft.total = total;
  draft.loading = false;
  return draft;
};

const loadError = (draft: UserListState, e?: any) => {
  draft.loading = false;
  draft.error = e;
  return draft;
};

export default (state = initialState, action: UsersAction) => produce(
  state,
  (draft: UserListState) => {
    switch (action.type) {
      case USERS_LOAD: return showLoading(draft);
      case USERS_LIST_GET_SUCCESS: return loadSuccess(draft, action.users, action.total, action.page, action.limit);
      case SET_LIMIT: return setLimit(draft, action.limit);
      case SET_PAGE: return setPage(draft, action.page);
      case USERS_ERROR: return loadError(draft, action.error);
      default: return state;
    }
  },
);
