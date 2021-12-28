import reducer from '../../redux/reducers/posts';

const initialState = {
  posts: [],
  post: {},
  page: 0,
  limit: 12,
  total: 0,
  loading: false,
  error: '',
}

describe('posts test', () => {

  test('POSTS_LOADING', () => {
    expect(reducer(initialState, {type: 'POSTS/LOAD'})).toEqual({
      ...initialState,
      loading: true
    });
  });

  test('LOAD_POSTS_SUCCESS', () => {
    const posts = [
      {
        id: "60d21bb867d0d8992e610dd3",
        image: "https://img.dummyapi.io/photo-1558929996-da64ba858215.jpg",
        text: "two white and brown dogs",
      },
      {
        id: "60d21b0067d0d8992e610bb7",
        image: "https://img.dummyapi.io/photo-1516764804551-8a2b7b27e9d7.jpg",
        text: "my lil old soul with a baby face // his handle is ...",
      }
    ];
    const total = 0
    const page = 0
    const limit = 12
    expect(reducer(initialState, { type: 'POSTS/SUCCESS', posts, total, page, limit })).toEqual({
      ...initialState,
      posts,
    })
  });

  test('GET_CURRENT_POSTS_SUCCESS', () => {
    const post =
      {
        id: "60d21bb867d0d8992e610dd3",
        image: "https://img.dummyapi.io/photo-1558929996-da64ba858215.jpg",
        text: "two white and brown dogs",
      };
    expect(reducer(initialState, {type: 'POSTS/CET_CURRENT_POSTS_SUCCESS', post})).toEqual({
      ...initialState,
      post,
    })
  });

  test('UNKNOWN ACTION', () => {
    expect(reducer(initialState, {type: 'UNKNOWN'})).toEqual(initialState)
  })
});
