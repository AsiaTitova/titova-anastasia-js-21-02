/* eslint-disable */
import produce from 'immer';
import { UserListState } from '../../types/state';
import { UserType } from "../../types/types";
import { LoadUserActionType } from "../../types/actions";
import {
  LOAD_USERS, GET_USERS, ERROR_USERS, SET_PAGE, SET_LIMIT,
} from "../../constants/constants";

const initialState: UserListState = {
  users: [],
  page: 0,
  limit: 10,
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


export default (state = initialState, action: LoadUserActionType) => produce(
  state,
  (draft: UserListState) => {
    switch (action.type) {
      case LOAD_USERS: return showLoading(draft);
      case GET_USERS: return loadSuccess(draft, action.users, action.total, action.page, action.limit);
      case SET_LIMIT: return setLimit(draft, action.limit);
      case SET_PAGE: return setPage(draft, action.page);
      case ERROR_USERS: return loadError(draft, action.error);
      default: return state;
    }
  },
);
