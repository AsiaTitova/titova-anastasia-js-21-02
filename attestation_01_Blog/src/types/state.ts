import { CommentType, PostType, UserType } from './types';

export interface State {
  auth: AuthState;
  users: UserListState;
  comments: CommentListState;
  posts: PostListState;
  page?: number;
  limit?: number;
  total?: number;
  loading?: boolean;
  error?: string;
}

export interface AuthState {
  error?: string;
  auth?: boolean;
  id?: string;
  firstName?: string;
  lastName?: string;
  picture?: string;
  loading?: boolean;
}

export interface UserListState {
  error?: string;
  edit?: boolean;
  user?: UserType;
  users?: Array<UserType>;
  page?: number;
  limit?: number;
  total?: number;
  loading?: boolean;
}

export interface CommentListState {
  error?: string;
  postId: string;
  comments: Array<CommentType>;
  page: number;
  pageSize: number;
  total: number;
  loading?: boolean;
}

export interface PostListState {
  posts?: Array<PostType>;
  page?: number;
  limit?: number;
  total?: number;
  loading?: boolean;
  error?: string;
}

export interface UserCreateState {
  id: string;
  error: string;
  loading?: boolean;
}
