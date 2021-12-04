/* eslint-disable */
import React, { useState, useEffect } from 'react';
import './UserContainer.scss';
import { Pagination } from 'antd';
import UserList from '../UserList/UserList';
import ThemeSwitch from '../../ThemeSwitch/ThemeSwitch';
import { UserListState } from '../../../types/state';
import userListStore from '../../../stores/users';
import getUsersList from '../../../actions/users';

const UserContainer = () => {
  const [UserListState, setUserListState] = useState({} as UserListState);
  const [page, setPage] = useState(0 as number);
  const [limit, setLimit] = useState(10 as number);
  const [total, setTotal] = useState(0 as number);
  const [pageSizeArray] = useState(['10', '20', '50'] as Array<string>);

  useEffect(() => {
    userListStore.on('change', () => {
      const resp: UserListState = userListStore.getState();
      if (resp.userList) {
        setPage(resp.userList.page);
        setLimit(resp.userList.limit);
        setTotal(resp.userList.total);
        setUserListState({ ...resp });
      }
    });
    getUsersList(page, limit);
  }, []);

  const updatePageNumber = (current: number, limitNumber: number): void => {
    setPage(current);
    if (limit !== limitNumber) {
      setLimit(limitNumber);
      getUsersList(0, limitNumber);
    } else {
      getUsersList(current, limitNumber);
    }
  };


  return (
    <section className="user">
      <div className="user__header">
        <h2 className="user__title">Пользователи</h2>
      </div>
      {UserListState.userList && <UserList userList={UserListState.userList.data} />}
      <div className="user__footer">
        <Pagination
          total={total}
          pageSize={limit}
          pageSizeOptions={pageSizeArray}
          current={page + 1}
          onChange={updatePageNumber}
        />
        <ThemeSwitch />
      </div>
    </section>
  );
};

export default UserContainer;
