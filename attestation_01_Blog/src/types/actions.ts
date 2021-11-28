import { PostType, UserType, CommentType } from './types';

export interface Action {
  type: string;
}

export interface AuthAction extends Action {
  id?: string;
  user?: UserType;
  error?: string;
}

export interface CreateUserAction extends Action {
  id?: string;
  entity?: UserType;
  error?: string;
}

export interface UsersAction extends Action {
  avatar?: Blob;
  users?: Array<UserType>;
  user?: UserType;
  id?: string;
  total?: number;
  page?: number;
  pageSize?: number;
  error?: string;
  edit?: boolean;
}

export interface CommentsAction extends Action {
  postId?: string;
  userid?: string;
  comments?: Array<CommentType>;
  total?: number;
  page?: number;
  pageSize?: number;
  error?: string;
}

export interface PostsAction extends Action {
  userid?: string;
  postId?: string;
  post?: PostType;
  posts?: Array<PostType> | undefined;
  total?: number;
  page?: number;
  limit?: number;
  loading?: boolean | undefined;
  error?: string | undefined;
}
