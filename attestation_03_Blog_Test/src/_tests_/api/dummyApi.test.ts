import fetchMock from 'jest-fetch-mock';
import { getUserList, getUserById, createUser, updateUser, getPostList, getCommentsByPost, getUsersPostById } from '../../api/dumMyApi';
import {APP_ID_FIELD, APP_ID_VALUE} from "../../constants/constants";

describe('dummyApi tests', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  // список пользователей
  describe('getUserList', () => {
    test('should call fetch with url and options', () => {
      const fetchResponse = {
        data: 'any data',
      };
      fetchMock.mockResponse(JSON.stringify(fetchResponse));
      const fetchOptions = {
        method: 'GET',
      };
      const url = 'http://localhost:3007/api/user?page=1&limit=10';
      getUserList(1, 10);
      expect(fetchMock).toBeCalledWith(url, fetchOptions);
    });

    test('should return response.data', async () => {
      const fetchResponse = {
        data: 'any data'
      }
      fetchMock.mockResponse(JSON.stringify(fetchResponse));
      const result = await getUserList(1, 10);
      expect(JSON.parse(result).data).toBe(fetchResponse.data);
    });

    test('should return fetch error', async () => {
      const error = {
        message: 'fetch error',
      }
      fetchMock.mockReject(() => Promise.reject(error));
      try {
        const result = await getUserList(1, 10);
        expect(result).toEqual(expect.any(Promise))
      } catch (err: any) {
        expect(err.message).toBe(error.message);
      }
    });
  });

  // информация о пользователе
  describe('getUserById', () => {
    test('should call fetch with url and options', () => {
      const fetchResponse = {
        data: 'any data',
      };
      fetchMock.mockResponse(JSON.stringify(fetchResponse));
      const fetchOptions = {
        method: 'GET',
      };
      const url = 'http://localhost:3007/api/user/60d0fe4f5311236168a109ca';
      getUserById('60d0fe4f5311236168a109ca');
      expect(fetchMock).toBeCalledWith(url, fetchOptions);
    });

    test('should return response.data', async () => {
      const fetchResponse = {
        data: 'any data'
      }
      fetchMock.mockResponse(JSON.stringify(fetchResponse));
      const result = await getUserById('60d0fe4f5311236168a109ca');
      expect(JSON.parse(result).data).toBe(fetchResponse.data);
    });

    test('should return fetch error', async () => {
      const error = {
        message: 'fetch error',
      }
      fetchMock.mockReject(() => Promise.reject(error));
      try {
        const result = await getUserById('60d0fe4f5311236168a109ca');
        expect(result).toEqual(expect.any(Promise))
      } catch (err: any) {
        expect(err.message).toBe(error.message);
      }
    });
  });

  // создание нового пользователя
  test('createUser: should call fetch with url and options', () => {
    const fetchResponse = {
      data: 'any data',
    };
    const body = {
      id: '60d0fe4f5311236168a109ca',
      firstName: 'Sara',
      lastName: 'Andersen',
      title: 'ms',
      picture: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
      gender: 'female',
      email: 'sara.andersen@example.com',
      dateOfBirth: '2021-12-08T17:57:51.811Z',
      phone: '+78345345345345454',
    }
    fetchMock.mockResponse(JSON.stringify(fetchResponse));
    const fetchOptions = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(body),
    };
    const url = 'http://localhost:3007/api/user/create';
    createUser(body);
    expect(fetchMock).toBeCalledWith(url, fetchOptions);
  });

  // редактирвоание пользователя
  test('updateUser: should call fetch with url and options', () => {
    const fetchResponse = {
      data: 'any data',
    };
    const id = '60d0fe4f5311236168a109ca';
    const body = {
      firstName: 'Sara',
      lastName: 'Andersen',
      title: 'ms',
      picture: 'https://randomuser.me/api/portraits/women/58.jpg',
      gender: 'female',
      email: 'sara.andersen@example.com',
      dateOfBirth: '2021-12-08T17:57:51.811Z',
      phone: '+78345345345345454',
      registerDate: '2021-06-21T21:02:07.374Z',
    }
    fetchMock.mockResponse(JSON.stringify(fetchResponse));
    const fetchOptions = {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(body),
    };
    const url = `http://localhost:3007/api/user/${id}`;
    updateUser(body, id);
    expect(fetchMock).toBeCalledWith(url, fetchOptions);
  });

  // список постов
  test('getPostList: should call fetch with url and options', () => {
    const fetchResponse = {
      data: 'any data',
    };
    fetchMock.mockResponse(JSON.stringify(fetchResponse));
    const fetchOptions = {
      method: 'GET',
    };
    const url = 'http://localhost:3007/api/post?page=1&limit=10';
    getPostList(1, 10);
    expect(fetchMock).toBeCalledWith(url, fetchOptions);
  });

  // комментарии к посту
  test('getCommentsByPost: should call fetch with url and options', () => {
    const fetchResponse = {
      data: 'any data',
    };
    fetchMock.mockResponse(JSON.stringify(fetchResponse));
    const fetchOptions = {
      method: 'GET',
    };
    const url = 'http://localhost:3007/api/post/60d0fe4f5311236168a109ca/comment?page=1&limit=10';
    getCommentsByPost('60d0fe4f5311236168a109ca', 1, 10);
    expect(fetchMock).toBeCalledWith(url, fetchOptions);
  });

  // посты конкретного пользователя
  test('getUsersPostById: should call fetch with url and options', () => {
    const fetchResponse = {
      data: 'any data',
    };
    fetchMock.mockResponse(JSON.stringify(fetchResponse));
    const fetchOptions = {
      method: 'GET'
  };
    const url = 'http://localhost:3007/api/user/60d0fe4f5311236168a109ca/post?page=0&limit=10';
    getUsersPostById('60d0fe4f5311236168a109ca', 0, 10);
    expect(fetchMock).toBeCalledWith(url, fetchOptions);
  });
});
