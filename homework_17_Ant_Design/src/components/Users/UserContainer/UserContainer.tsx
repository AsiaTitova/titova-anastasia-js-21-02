import React, { useState, useEffect } from 'react';
import './UserContainer.scss';
import { Pagination } from 'antd';
import UserList from '../UserList/UserList';
import ThemeSwitch from '../../ThemeSwitch/ThemeSwitch';
import { ResponseError, UserListResponse, UserType } from '../../../types/types';
import { getUserList } from '../../../api/dumMyApi';
import useOnceOnMount from '../../../utils/useOnceOnMount';

const UserContainer = () => {
  const [userList, setUserList] = useState([] as Array<UserType>);
  const [page, setPage] = useState(0 as number);
  const [limit, setLimit] = useState(10 as number);
  const [total, setTotal] = useState(0 as number);
  const [pageSizeArray] = useState(['10', '20', '50'] as Array<string>);

  const loadUsers = (pageNumber: number, limitNumber: number) => {
    getUserList(pageNumber, limitNumber, (resp: UserListResponse) => {
      setUserList(resp.data);
      setPage(resp.page);
      setLimit(resp.limit);
      setTotal(resp.total);
    }, ({ error }: ResponseError) => error);
  };

  const updateUsers = (pageNumber: number, limitNumber: number) => {
    getUserList(pageNumber, limitNumber, (resp: UserListResponse) => {
      setUserList(resp.data);
    }, ({ error }: ResponseError) => error);
  };

  const updatePageNumber = (current: number, limitNumber: number): void => {
    setPage(current);
    setLimit(limitNumber);
  };

  useOnceOnMount(() => {
    loadUsers(page, limit);
  });

  useEffect(() => {
    updateUsers(page, limit);
  }, [page, limit]);

  return (
    <section className="user">
      <div className="user__header">
        <h2 className="user__title">Пользователи</h2>
      </div>
      <UserList userList={userList} />
      <div className="user__footer">
        <Pagination
          total={total}
          pageSize={limit}
          pageSizeOptions={pageSizeArray}
          current={page}
          onChange={updatePageNumber}
        />
        <ThemeSwitch />
      </div>
    </section>
  );
};

export default UserContainer;
