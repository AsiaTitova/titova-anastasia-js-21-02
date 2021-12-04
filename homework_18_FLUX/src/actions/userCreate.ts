/* eslint-disable */
import dispatcher from '../dispatcher';
import { LOAD_USERS, CREATE_USER_ERROR, CREATE_USER_SUCCESS} from '../constants/constants';
import { createUser } from '../api/dumMyApi';
import { UserType, ResponseError } from '../types/types';

const createUserAction = (user: UserType) => {
  dispatcher.dispatch({
    type: LOAD_USERS,
  });

  createUser(user, ((resp: any) => {
      if ('error' in resp) {
        dispatcher.dispatch({
          type: CREATE_USER_ERROR,
          error: resp,
        });
      } else {
        dispatcher.dispatch({
          type: CREATE_USER_SUCCESS,
          payload: resp as UserType,
        });
      }
    }), ((resp: ResponseError) => {
      dispatcher.dispatch({
        type: CREATE_USER_ERROR,
        error: resp as ResponseError,
      });
    }));
};

export default createUserAction;
