import React from 'react';
import './UserAvatar.scss';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
import { UserType } from '../../../types/types';

interface Props {
  user: UserType;
}

const UserAvatar = ({ user }: Props) => (
  <Link to={`post/${user.id}`}>
    <div className="user-avatar">
      <Avatar src={user.picture} size="large" />
      <p className="user-avatar__name">
        <span>{user.firstName}</span>
        <span>{user.lastName}</span>
      </p>

    </div>
  </Link>
);

export default UserAvatar;
