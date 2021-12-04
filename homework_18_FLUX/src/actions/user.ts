/* eslint-disable */
import dispatcher from "../dispatcher";
import { GET_CURRENT_USER, LOAD_USERS } from "../constants/constants";
import { UserType } from "../types/types";
import { getUserById } from "../api/dumMyApi";

const getCurrentUser = (id: string) => {
  dispatcher.dispatch({
    type: LOAD_USERS,
  });
  getUserById(id, ((resp: UserType) => {
    dispatcher.dispatch({
      type: GET_CURRENT_USER,
      payload: resp,
    });
  }));
};

export default getCurrentUser;
