import React, { useState, useEffect } from 'react';
import './UserList.scss';
import { Pagination, Spin, Space } from 'antd';
import { ResponseError, UserListResponse, UserType } from '../../../types/types';
import { getUserList } from '../../../api/dumMyApi';
import useOnceOnMount from '../../../utils/useOnceOnMount';
import UserItem from '../UserItem/UserItem';

const UserList = () => {
  const [userList, setUserList] = useState([] as Array<UserType>);
  const [page, setPage] = useState(0 as number);
  const [limit, setLimit] = useState(12 as number);
  const [total, setTotal] = useState(0 as number);
  const [pageSizeArray] = useState(['12', '21', '51'] as Array<string>);
  const [loading, setLoading] = useState(false as boolean);

  const loadUsers = (pageNumber: number, limitNumber: number) => {
    setLoading(true);
    getUserList(pageNumber, limitNumber, (resp: UserListResponse) => {
      setUserList(resp.data);
      setPage(resp.page);
      setLimit(resp.limit);
      setTotal(resp.total);
      setLoading(false);
    }, ({ error }: ResponseError) => {
      error;
      setLoading(false);
    });
  };

  const updateUsers = (pageNumber: number, limitNumber: number) => {
    setLoading(true);
    getUserList(pageNumber, limitNumber, (resp: UserListResponse) => {
      setUserList(resp.data);
      setLoading(false);
    }, ({ error }: ResponseError) => {
      error;
      setLoading(false);
    });
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
      {loading && (
        <Space size="middle">
          <Spin size="large" />
        </Space>
      )}
      {!loading && (
        <>
          <h1 className="user__title">Пользователи</h1>
          <ul className="user__list">
            {userList && userList.map((item: UserType, index: number) => (
              <li className="user__item" key={index}>
                <UserItem item={item} />
              </li>
            ))}
          </ul>
          <div className="user__footer">
            <Pagination
              total={total}
              pageSize={limit}
              pageSizeOptions={pageSizeArray}
              current={page}
              onChange={updatePageNumber}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default UserList;
