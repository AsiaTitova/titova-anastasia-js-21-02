import reducer from '../../redux/reducers/users'

const initialState = {
  users: [],
  user: {},
  posts: [],
  page: 0,
  limit: 12,
  total: 0,
  loading: false,
  error: '',
}

describe('users test', () => {

  test('USERS_LOAD', () => {
    expect(reducer(initialState, {type: 'USERS/LOAD'})).toEqual({
      ...initialState,
      loading: true
    });
  });

  test('SET_PAGE', () => {
    expect(reducer(initialState, {type:'SET_PAGE', page: 5})).toEqual({
      ...initialState,
      page: 5,
    })
  });

  test('SET_LIMIT', () => {
    expect(reducer(initialState, {type:'SET_LIMIT', limit: 24})).toEqual({
      ...initialState,
      limit: 24,
    })
  });

  test('USERS_LIST_GET_SUCCESS', () => {
    const users = [
      {
        firstName: "Sara",
        id: "60d0fe4f5311236168a109ca",
        lastName: "Andersen",
        picture: "https://randomuser.me/api/portraits/women/58.jpg",
        title: "ms",
      },
      {
        firstName: "Edita",
        id: "60d0fe4f5311236168a109cb",
        lastName: "Vestering",
        picture: "https://randomuser.me/api/portraits/med/women/89.jpg",
        title: "miss",
      }
    ];
    const total = 0
    const page = 0
    const limit = 12
    expect(reducer(initialState, { type: 'USERS/SUCCESS_GET', users, total, page, limit })).toEqual({
      ...initialState,
      users,
    })
  });

  test('USERS_GET', () => {
    const user =
      {
        firstName: "Sara",
        id: "60d0fe4f5311236168a109ca",
        lastName: "Andersen",
        picture: "https://randomuser.me/api/portraits/women/58.jpg",
        title: "ms",
      };
    expect(reducer(initialState, {type: 'USERS/GET', user})).toEqual({
      ...initialState,
      user,
    })
  });


  test('POSTS_USER', () => {
    const posts = [
      {
        id: "60d21bb867d0d8992e610dd3",
        image: "https://img.dummyapi.io/photo-1558929996-da64ba858215.jpg",
        text: "two white and brown dogs",
      }
      ];
    const total = 0
    const page = 0
    const limit = 12
    expect(reducer(initialState, {type: 'POSTS/LOAD_BY_USER', posts, total, page, limit})).toEqual({
      ...initialState,
      posts,
    })
  });

  test('UNKNOWN ACTION', () => {
    expect(reducer(initialState, {type: 'UNKNOWN'})).toEqual(initialState)
  })
});
