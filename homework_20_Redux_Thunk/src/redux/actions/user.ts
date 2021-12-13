/* eslint-disable */
import { Dispatch } from 'redux';
import {LOAD_USERS, GET_CURRENT_USER, ERROR_USERS } from '../../constants/constants';
import { UserType } from '../../types/types';
import { getUsersActionType } from '../../types/actions';
import {createUser, getUserById} from '../../api/dumMyApi';

export const loadUsersAction = (): getUsersActionType => ({
  type: LOAD_USERS,
  loading: true,
  error: "",
});

export const successCurrentUsersActions = (user: UserType): getUsersActionType => ({
  type: GET_CURRENT_USER,
  payload: user,
  loading: false,
  error: "",
});

const errorUsersAction = (error: string): getUsersActionType => ({
  type: ERROR_USERS,
  loading: false,
  error,
});

export const loadCurrentUserList = (id: string): any => (dispatch: Dispatch) => {
  dispatch(loadUsersAction());
  getUserById(id, (resp: UserType) => {
    dispatch(successCurrentUsersActions(resp));
  }, (error: any) => {
    dispatch(errorUsersAction(error));
  });
};

export const loadCreateUser = (body: UserType): any => (dispatch: Dispatch) => {
  dispatch(loadUsersAction());
  createUser(body, (resp: any) => {
      dispatch(successCurrentUsersActions(resp));
    },
    (error: any) => {
      dispatch(errorUsersAction(error));
    });
};


