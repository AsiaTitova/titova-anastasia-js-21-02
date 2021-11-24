import React from 'react';
import './UserItem.scss';
import { UserType } from '../../../types/types';

interface Props {
  item: UserType;
}

const UserItem = ({ item }: Props) => (
  <div className="user__item">
    <div className="user__avatar">
      <img className="user__img" src={item.picture} width="100" height="100" alt="avatar" />
    </div>
    <h3 className="user__name">
      {item.title}
      {item.firstName}
      {item.lastName}
    </h3>
  </div>
);

export default UserItem;
