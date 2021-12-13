/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './UserContainer.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Pagination } from 'antd';
import UserList from '../UserList/UserList';
import ThemeSwitch from '../../ThemeSwitch/ThemeSwitch';
import {UserListResponse, UserType} from '../../../types/types';
import { State } from "../../../types/state";
import { successUsersActions } from "../../../redux/actions/users";
import { getUserList } from "../../../api/dumMyApi";

interface Props {
  users: any,
  page: any,
  limit: any,
  total: any,
  loadSuccess: (users: Array<UserType>, total: number, page: number, limit: number,) => any,
}

const UserContainer = ({ users, page, limit, total, loadSuccess }: Props) => {
  const [pageSizeArray] = useState(['10', '20', '50'] as Array<string>);

  useEffect(() => {
    getUserList(page, limit, (resp: UserListResponse) => loadSuccess(resp.data, resp.total, resp.page, resp.limit), (error: any) => {alert(error)})
  }, []);

  const updatePageNumber = (current: number, limitNumber: number): void => {
    getUserList(current, limitNumber, (resp: UserListResponse) => loadSuccess(resp.data, resp.total, resp.page, resp.limit), (error: any) => {alert(error)})
  };

  return (
    <section className="user">
      <div className="user__header">
        <h2 className="user__title">Пользователи</h2>
      </div>
      {users && <UserList userList={users} />}
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

export default connect(
  (state: State) => ({
    users: state.users.users,
    total: state.users.total,
    page: state.users.page,
    limit: state.users.limit,
    loading: state.users.loading,
    error: state.users.error,
  }),
  (dispatch: any) => ({
    loadSuccess: bindActionCreators(successUsersActions, dispatch),
  }),
)(UserContainer);
