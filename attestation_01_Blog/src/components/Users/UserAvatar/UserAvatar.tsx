import React from 'react';
import './UserAvatar.scss';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

interface Props {
  id: string;
  firstName: string;
  lastName: string;
  picture: string;
}

const UserAvatar = ({
  id,
  firstName,
  lastName,
  picture,
}: Props) => (
  <Link to={`user/${id && id}`}>
    <div className="user-avatar">
      <Avatar src={picture && picture} size="large" />
      <p className="user-avatar__name">
        <span>{firstName && firstName}</span>
        <span>{lastName && lastName}</span>
      </p>
    </div>
  </Link>
);

export default UserAvatar;
