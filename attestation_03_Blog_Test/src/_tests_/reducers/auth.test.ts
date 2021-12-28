import reducer from '../../redux/reducers/auth';

const initialState = {
  auth: false,
  user: {},
  id: '',
  firstName: '',
  lastName: '',
  picture: '',
  loading: false,
  error: '',
}

describe('auth test', () => {

  test('AUTH_SIGN_IN', () => {
    expect(reducer(initialState, {type: 'AUTH/SIGN_IN'})).toEqual({
      ...initialState,
      loading: true
    });
  });


  test('UNKNOWN ACTION', () => {
    expect(reducer(initialState, {type: 'UNKNOWN'})).toEqual(initialState)
  })
});
