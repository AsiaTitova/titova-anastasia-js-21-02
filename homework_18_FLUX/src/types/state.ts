import { UserListResponse } from './types';

export interface UserListState {
  userList: UserListResponse;
  isLoading: boolean;
}
