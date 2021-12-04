/* eslint-disable */
import React from 'react';
import './UserList.scss';
import UserItem from '../UserItem/UserItem';
import { UserType } from '../../../types/types';
import ComponentWithHelper from '../../../wrapper/ComponentWithHelper';

interface Props {
  userList: Array<UserType>;
}

const UserList = ({ userList }: Props) => (
  <ul className="user__list">
    {userList.length
      ? userList.map((item: UserType, index: number) => (
        <ComponentWithHelper
          id={item.id ? item.id : ''}
          key={index}
        >
          <UserItem item={item} />
        </ComponentWithHelper>
      ))
      : (<li className="item__empty">Список пуст :(</li>)}
  </ul>
);

export default UserList;
