import { loadUserList } from '../../redux/actions/users';
import * as dummyApi from '../../api/dumMyApi';

jest.mock('../../api/dumMyApi');

describe('users actions test', () => {

  const loadAction = loadUserList(1, 12);

  test('getUserList: should call showLoadingAction', async () => {
    const result = {
      data: 'success result',
    }
    await (dummyApi.getUserList as jest.Mock).mockResolvedValue(result);
    const dispatch = jest.fn();
    loadAction(dispatch);
    expect(dispatch).toBeCalledWith({ type: 'USERS/LOAD', loading: true})
  });

  test('getUserList: should call loadSuccessAction', async () => {
    const apiResult =  {
      data: [
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
      ]};
    (dummyApi.getUserList as jest.Mock).mockResolvedValue(JSON.stringify(apiResult));
    const dispatch = await jest
      .fn()
      .mockImplementationOnce(() => {})
      .mockImplementationOnce((action) => {
        expect(action).toEqual({
          type: 'USERS/GET',
          users: apiResult,
        })
      });
    loadAction(dispatch);
  });

  test('getUserList: should call loadErrorAction', async () => {
    const error = {
      message: 'error result',
    };
    (dummyApi.getUserList as jest.Mock).mockRejectedValue(error);
    const dispatch = await jest
      .fn()
      .mockImplementationOnce(() => {})
      .mockImplementationOnce((action) => {
        expect(action).toEqual({
          type: 'USERS/ERROR',
          loading: false,
          error: error.message,
        })
      });
    await loadAction(dispatch);
  });
});
