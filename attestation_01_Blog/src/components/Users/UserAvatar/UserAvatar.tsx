import React from 'react';
import './UserAvatar.scss';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

interface Props {
  id?: string;
  firstName?: string;
  lastName?: string;
  picture?: string;
}

const UserAvatar = ({
  id,
  firstName,
  lastName,
  picture,
}: Props) => (
  <Link to={`/user/${id}`}>
    <div className="user-avatar">
      <Avatar src={picture} size="large" />
      <div className="user-avatar__tooltip">{id}</div>
      <p className="user-avatar__name">
        <span>{firstName}</span>
        <span>{lastName}</span>
      </p>
    </div>
  </Link>
);

UserAvatar.defaultProps = {
  id: '',
  firstName: '',
  lastName: '',
  picture: '',
};

export default UserAvatar;
