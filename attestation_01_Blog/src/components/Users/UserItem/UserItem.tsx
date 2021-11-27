import React from 'react';
import { Link } from 'react-router-dom';
import './UserItem.scss';
import { UserType } from '../../../types/types';

interface Props {
  item: UserType;
}

const UserItem = ({ item }: Props) => (
  <Link to={`user/${item.id}`}>
    <div className="user__info">
      <div className="user__avatar">
        <img className="user__img" src={item.picture} width="100" height="100" alt="avatar" />
      </div>
      <h3 className="user__name">
        <span>{item.title}</span>
        .
        <span>{item.firstName}</span>
        <span>{item.lastName}</span>
      </h3>
    </div>
  </Link>
);

export default UserItem;
