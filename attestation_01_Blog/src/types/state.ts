import { PostType } from './types';

export interface State {
  posts: PostsState
}

export interface PostsState {
  postList: Array<PostType>
  loading: boolean
  error?: string
}
