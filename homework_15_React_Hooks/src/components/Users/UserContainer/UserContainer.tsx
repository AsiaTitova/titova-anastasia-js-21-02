import React, { useState, useEffect } from 'react';
import './UserContainer.scss';
import UserList from '../UserList/UserList';
import Pagination from '../Pagination/Pagination';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import { UserListResponse, UserType } from '../../../types/types';
import { getUserList } from '../../../api/dumMyApi';
import useOnceOnMount from '../../../hooks/useOnceOnMount';

const UserContainer = () => {
  const [userList, setUserList] = useState([] as Array<UserType>);
  const [pageArray, setPageArray] = useState([] as Array<number>);
  const [page, setPage] = useState(0 as number);
  const [limit, setLimit] = useState(10 as number);

  const calculatePageArray = (pageNumber: number, limitNumber: number) => {
    const newPageArr = [];
    for (let i = 0; i < pageNumber / limitNumber; i += 1) {
      newPageArr.push(i + 1);
    }
    return newPageArr;
  };

  const loadUsers = (pageNumber: number, limitNumber: number) => {
    getUserList(pageNumber, limitNumber, (resp: UserListResponse) => {
      setUserList(resp.data);
      setPage(resp.page);
      setLimit(resp.limit);
      setPageArray(calculatePageArray(resp.total, resp.limit));
    });
  };

  const updateUsers = (pageNumber: number, limitNumber: number) => {
    getUserList(pageNumber, limitNumber, (resp: UserListResponse) => {
      setUserList(resp.data);
    });
  };

  const updatePageNumber = (pageNumber: number): void => {
    setPage(pageNumber);
  };

  const updateLimitUser = (limitNumber: number): void => {
    setLimit(limitNumber);
  };

  useOnceOnMount(() => {
    loadUsers(page, limit);
  });

  useEffect(() => {
    updateUsers(page, limit);
  }, [page]);

  useEffect(() => {
    loadUsers(1, limit);
  }, [limit]);

  return (
    <section className="user">
      <div className="user__header">
        <h2 className="user__title">Пользователи</h2>
      </div>
      <UserList userList={userList} />
      <div className="user__footer">
        <Pagination
          pageCount={pageArray}
          updatePageNumber={updatePageNumber}
          updateLimitUser={updateLimitUser}
        />
        <ThemeSwitch />
      </div>
    </section>
  );
};

export default UserContainer;
