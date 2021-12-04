/* eslint-disable */
import {
  APP_ID_FIELD, APP_ID_VALUE, USER_URL, LIMIT_FIELD, PAGE_FIELD, METHOD_GET, METHOD_POST, USER_CREATE_URL,
} from '../constants/constants';
import { UserListResponse, ResponseError, UserType } from '../types/types';

const doGetRequest = <T>(
  path: string,
  callback: (resp: T) => void,
  errorCallback?: (resp: ResponseError) => void,
  finalCallback?: () => void,
  searchParams?: Record<string, any>,
) => {
  const url = new URL(path, USER_URL);
  searchParams && Object.entries(searchParams).forEach((params) => {
    url.searchParams.append(params[0], params[1].toString());
  });
  fetch(url.toString(), {
    method: METHOD_GET,
    headers: new Headers({
      [APP_ID_FIELD]: APP_ID_VALUE,
    }),
  }).then((resp) => resp.json())
    .then(callback)
    .catch(errorCallback)
    .finally(finalCallback);
};

const doPostRequest = <T>(
  path: string,
  body: T,
  callback: (resp: T) => void,
  errorCallback?: (resp: ResponseError) => void,
  finalCallback?: () => void,
) => {
  const url = new URL(path, USER_CREATE_URL);
  const bodyInfo = JSON.stringify(body);
  fetch(url.toString(), {
    method: METHOD_POST,
    headers: new Headers({
      [APP_ID_FIELD]: APP_ID_VALUE,
      'Content-Type': 'application/json',
    }),
    body: bodyInfo,
  }).then((resp) => resp.json())
    .then(callback)
    .catch(errorCallback)
    .finally(finalCallback);
};

export const getUserList = (
  page: number,
  limit: number,
  callback: (resp: UserListResponse) => void,
  errorCallback?: (resp: any) => void,
  finalCallback?: () => void,
) => {
  doGetRequest(`${USER_URL}?${PAGE_FIELD}=${(page - 1).toString()}&${LIMIT_FIELD}=${limit.toString()}`, callback, errorCallback, finalCallback);
};

export const getUserById = (
  id: string,
  callback: (resp: UserType) => void,
  errorCallback?: (resp: ResponseError) => void,
  finalCallback?: () => void,
) => {
  doGetRequest(`user/${id}`, callback, errorCallback, finalCallback);
};

export const createUser = (
  body: UserType,
  callback: (resp: UserType) => void,
  errorCallback?: (resp: ResponseError) => void,
  finalCallback?: () => void,
): any => {
  doPostRequest(USER_CREATE_URL, body, callback, errorCallback, finalCallback);
};
