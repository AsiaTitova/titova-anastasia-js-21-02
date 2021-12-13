/* eslint-disable */
import React, { useState, useEffect } from 'react';
import './UserContainer.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Pagination, Spin, Space } from 'antd';
import UserList from '../UserList/UserList';
import ThemeSwitch from '../../ThemeSwitch/ThemeSwitch';
import { State } from "../../../types/state";
import * as actions from '../../../redux/actions/users';

interface Props {
  users: any,
  page: any,
  limit: any,
  total: any,
  loading: any,
  loadUserList: (pageNumber: number, limitNumber: number) => any;
}

const UserContainer = ({ users, page, limit, loading, total, loadUserList }: Props) => {
  const [pageSizeArray] = useState(['10', '20', '50'] as Array<string>);

  useEffect(() => {
    loadUserList(page, limit)
  }, []);

  const updatePageNumber = (current: number, limitNumber: number): void => {
    loadUserList(current, limitNumber)
  };

  return (
    <section className="user">
      {loading && (
        <Space size="middle">
          <Spin size="large" />
        </Space>
      )}
      {!loading && (
        <>
          <div className="user__header">
            <h2 className="user__title">Пользователи</h2>
          </div>
          { users && <UserList userList={users} /> }
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
        </>
      )}
    </section>
  );
};

export default connect(
  (state: State) => ({
    users: state.users.users,
    total: state.users.total,
    page: state.users.page,
    limit: state.users.limit,
    loading: state.users.loading,
    error: state.users.error,
  }),
  (dispatch: any) => bindActionCreators(actions, dispatch),
)(UserContainer);
