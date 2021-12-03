import { LOAD_USERS, GET_USERS } from '../constants/constants';
import dispatcher from "../dispatcher";
import {UserListResponse, UserType} from "../types/types";
import { getUserList } from "../api/dumMyApi";

const getUsersList = (page: number, limit: number) => {
  dispatcher.dispatch({ // Отправить action в диспетчер
    type: LOAD_USERS,
  }};
  getUserList(page, limit).then((resp: UserListResponse) => {
    dispatcher.dispatch({
      type: GET_USERS,
      payload: resp,
    });
  });
};

export default getUsersList;
