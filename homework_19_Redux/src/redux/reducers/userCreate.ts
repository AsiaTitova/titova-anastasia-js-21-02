/* eslint-disable */
import produce from 'immer';
import { UserState } from '../../types/state';
import { UserType } from '../../types/types';
import { getUsersActionType } from '../../types/actions';
import {
  LOAD_USERS, ERROR_USERS, CREATE_USER_SUCCESS, CREATE_USER_ERROR,
} from '../../constants/constants';

const initialState: UserState = {
  currentUser: {},
  loading: false,
  error: '',
};

const showLoading = (draft: UserState) => {
  draft.loading = true;
  return draft;
};


const loadSuccess = (draft: UserState, resp?: UserType) => {
  draft.currentUser = resp || {};
  draft.loading = false;
  return draft;
};

const loadError = (draft: UserState, e?: any) => {
  draft.loading = false;
  draft.error = e;
  return draft;
};


export default (state = initialState, action: getUsersActionType) => produce(
  state,
  (draft: UserState) => {
    switch (action.type) {
      case LOAD_USERS: return showLoading(draft);
      case CREATE_USER_SUCCESS: return loadSuccess(draft, action.payload);
      case CREATE_USER_ERROR: return loadError(draft, action.error);
      default: return state;
    }
  },
);
