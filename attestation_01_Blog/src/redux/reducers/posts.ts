import { PostsState } from '../../types/state';

const initialState = {
  postList: [],
  loading: false,
  error: '',
};

const posts = (state: PostsState = initialState, action: any) => {
  if (action.type === 'GET_POST') {
    return {
      ...state,
      postList: action.payload,
      loading: false,
      error: '',
    };
  }
  return state;
};

export default posts;
