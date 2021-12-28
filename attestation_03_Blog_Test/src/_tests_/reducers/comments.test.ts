import reducer from '../../redux/reducers/comments';

const initialState = {
  postId: '',
  comments: [],
  page: 0,
  pageSize: 5,
  total: 0,
  loading: false,
  error: '',
}

describe('comments test', () => {

  test('COMMENTS_LOAD', () => {
    expect(reducer(initialState, {type: 'COMMENTS/LOAD'})).toEqual({
      ...initialState,
      loading: true
    });
  });

  test('COMMENTS_SUCCESS', () => {
    const comments = [
      {
        id: "60d2252867d0d8992e611a92",
        message: "Handsome image",
        owner: {
          firstName: "Joey",
          id: "60d0fe4f5311236168a109e7",
          lastName: "Oliver",
          picture: "https://randomuser.me/api/portraits/med/men/61.jpg",
          title: "mr",
          post: "60d21baa67d0d8992e610da7",
          publishDate: "2020-04-22T06:36:33.980Z",
        }
      },
      {
        id: "60d2252767d0d8992e611a8f",
        message: "Ideal post",
        owner: {
          firstName: "Tomothy",
          id: "60d0fe4f5311236168a10a27",
          lastName: "Hawkins",
          picture: "https://randomuser.me/api/portraits/med/men/48.jpg",
          title: "mr",
          post: "60d21baa67d0d8992e610da7",
          publishDate: "2020-03-13T02:37:59.788Z",
        }
      }
    ];
    const total = 0
    const page = 0
    const pageSize = 5
    expect(reducer(initialState, { type: 'COMMENTS/SUCCESS', comments, total, page, pageSize })).toEqual({
      ...initialState,
      comments,
    })
  });
  
  test('UNKNOWN ACTION', () => {
    expect(reducer(initialState, {type: 'UNKNOWN'})).toEqual(initialState)
  })
});
