import {
  APP_ID_FIELD, APP_ID_VALUE, USER_URL, LIMIT_FIELD, PAGE_FIELD, METHOD_GET, METHOD_POST, USER_CREATE_URL, POSTS_URL,
} from '../constants/constants';
import {
  UserListResponse,
  ResponseError,
  UserType,
  PostListResponse, PostType, CommentListResponse,
} from '../types/types';

const doGetRequest = <T>(
  path: string,
  callback?: (resp: T) => any,
  errorCallback?: (resp: ResponseError) => any,
  finalCallback?: () => any,
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
  callback: (resp: T) => any,
  errorCallback?: (resp: ResponseError) => any,
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
  callback?: (resp: UserListResponse) => any,
  errorCallback?: (resp: any) => void,
  finalCallback?: () => void,
) => {
  doGetRequest(`${USER_URL}?${PAGE_FIELD}=${(page - 1).toString()}&${LIMIT_FIELD}=${limit.toString()}`, callback, errorCallback, finalCallback);
};

export const getUserById = (
  id: string,
  callback: (resp: UserType) => any,
  errorCallback?: (resp: ResponseError) => void,
  finalCallback?: () => void,
) => {
  doGetRequest(`user/${id}`, callback, errorCallback, finalCallback);
};

export const createUser = (
  body: UserType,
  callback: (resp: UserType) => any,
  errorCallback?: (resp: ResponseError) => void,
  finalCallback?: () => void,
) => {
  doPostRequest(USER_CREATE_URL, body, callback, errorCallback, finalCallback);
};

export const getPostList = (
  page: number,
  limit: number,
  callback?: (resp: PostListResponse) => any,
  errorCallback?: (resp: any) => any,
  finalCallback?: () => any,
) => {
  doGetRequest(`${POSTS_URL}?${PAGE_FIELD}=${(page - 1).toString()}&${LIMIT_FIELD}=${limit.toString()}`, callback, errorCallback, finalCallback);
};

export const getPostById = (
  id: string,
  callback: (resp: PostType) => any,
  errorCallback?: (resp: ResponseError) => void,
  finalCallback?: () => void,
) => {
  doGetRequest(`post/${id}`, callback, errorCallback, finalCallback);
};

export const getCommentsByPost = (
  id: string,
  callback: (resp: CommentListResponse) => any,
  errorCallback?: (resp: any) => void,
  finalCallback?: () => void,
) => {
  doGetRequest(`post/${id}/comment`, callback, errorCallback, finalCallback);
};
