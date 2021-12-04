/* eslint-disable */
import { LOAD_USERS, GET_USERS } from '../constants/constants';
import dispatcher from "../dispatcher";
import { UserListResponse } from "../types/types";
import { getUserList } from "../api/dumMyApi";

const getUsersList = (page: number, limit: number) => {
  dispatcher.dispatch({ // Отправить action в диспетчер
    type: LOAD_USERS,
  });
  getUserList(page, limit, ((resp: UserListResponse) => {
    dispatcher.dispatch({
      type: GET_USERS,
      payload: resp,
    });
  }));
};

export default getUsersList;
