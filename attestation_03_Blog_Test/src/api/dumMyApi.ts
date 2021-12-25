/* eslint-disable */
import {
  APP_ID_FIELD,
  APP_ID_VALUE,
  USER_URL,
  LIMIT_FIELD,
  PAGE_FIELD,
  METHOD_GET,
  METHOD_POST,
  BASE_URL,
  POSTS_URL,
  METHOD_PUT,
} from '../constants/constants';
import { UserType } from '../types/types';

const doGetRequest = async (
  path: string,
  searchParams?: Record<string, any>,
) => {
  const url = new URL(path, BASE_URL);
  url.search = new URLSearchParams(searchParams).toString();
  const resp = await fetch(url.toString(), {
    method: METHOD_GET,
    headers: new Headers({
      [APP_ID_FIELD]: APP_ID_VALUE,
    }),
  });
  if (resp.ok) {
    return resp.text();
  }
  throw new Error(resp.statusText);
};

const doChangeRequest = async <T>(
  method: string,
  path: string,
  body: T,
) => {
  const url = new URL(path, BASE_URL);
  const bodyInfo = JSON.stringify(body);
  return fetch(url.toString(), {
    method,
    headers: new Headers({
      [APP_ID_FIELD]: APP_ID_VALUE,
      'Content-Type': 'application/json',
    }),
    body: bodyInfo,
  }).then((resp) => {
    if (resp.ok) {
      return resp.text();
    }
    throw new Error(resp.statusText);
  });
};

export const getUserList = async (
  page: number,
  limit: number,
) => doGetRequest(
  USER_URL,
  {
    [PAGE_FIELD]: page,
    [LIMIT_FIELD]: limit,
  },
);

export const getUserById = async (id: string) => doGetRequest(`${USER_URL}/${id}`);

export const createUser = (body: UserType) => doChangeRequest(METHOD_POST, `${USER_URL}/create`, body);

export const updateUser = async (
  body: UserType,
  id: string,
) => doChangeRequest(METHOD_PUT, `${USER_URL}/${id}`, body);

export const getPostList = async (
  page: number,
  limit: number,
) => doGetRequest(
  POSTS_URL,
  {
    [PAGE_FIELD]: page,
    [LIMIT_FIELD]: limit,
  },
);

export const getPostById = async (id: string) => doGetRequest(`${POSTS_URL}/${id}`);

export const getCommentsByPost = (
  id: string,
  page: number,
  limit: number,
) => doGetRequest(
  `${POSTS_URL}/${id}/comment`,
  {
    [PAGE_FIELD]: page,
    [LIMIT_FIELD]: limit,
  },
);

export const getUsersPostById = async (
  id: string,
  page: number,
  limit: number,
) => doGetRequest(
  `${USER_URL}/${id}/post`,
  {
    [PAGE_FIELD]: page,
    [LIMIT_FIELD]: limit,
  },
);
