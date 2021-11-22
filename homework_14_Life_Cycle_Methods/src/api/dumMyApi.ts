import {
  APP_ID_FIELD, APP_ID_VALUE, USER_URL, LIMIT_FIELD, PAGE_FIELD, METHOD_GET,
} from '../constants/constants';
import { UserListResponse } from '../types/types';

export const getUserList = (
  page: number,
  limit: number,
  callback: (resp: UserListResponse) => void,
  errorCallback?: (resp: any) => void,
) => fetch(`${USER_URL}?${PAGE_FIELD}=${(page - 1).toString()}&${LIMIT_FIELD}=${limit.toString()}`, {
  method: METHOD_GET,
  headers: new Headers({
    [APP_ID_FIELD]: APP_ID_VALUE,
  }),
}).then((response) => response.json())
  .then((response: UserListResponse) => callback(response))
  .catch(errorCallback);
