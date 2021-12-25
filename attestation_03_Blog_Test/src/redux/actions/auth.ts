/* eslint-disable */
import { Dispatch } from 'redux';
import {
  AUTH_SIGN_IN,
  AUTH_SUCCESS,
  AUTH_ERROR,
} from '../../constants/constants';
import { UserType } from '../../types/types';
import { AuthAction } from '../../types/actions';
import { getUserById } from '../../api/dumMyApi';

const loadSuccessAction = (user: UserType): AuthAction => ({
  type: AUTH_SUCCESS,
  auth: true,
  user,
  id: user.id,
  firstName: user.firstName,
  lastName: user.lastName,
  picture: user.picture,
  loading: false,
  error: '',
});

const loadErrorAction = (error: string): AuthAction => ({
  type: AUTH_ERROR,
  loading: false,
  error,
});

const showLoadingAction = () => ({
  type: AUTH_SIGN_IN,
  loading: true,
});

const hideLoadingAction = () => ({
  type: AUTH_SIGN_IN,
  loading: false,
});

export const login = (id: string): any => async (dispatch: Dispatch) => {
  try {
  dispatch(showLoadingAction());
    const resp = await getUserById(id);
    const data = JSON.parse(resp);
    dispatch(loadSuccessAction(data));
    window.localStorage.setItem('user', JSON.stringify(data));
    window.localStorage.setItem('user_id', JSON.stringify(data.id));
    window.localStorage.setItem('auth', JSON.stringify(true));
  } catch (error: any) {
    dispatch(loadErrorAction(error.message));
  } finally {
    dispatch(hideLoadingAction());
  }
};
