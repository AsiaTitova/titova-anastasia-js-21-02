import React, { useState } from 'react';
import './AuthorizationPanel.scss';
import { Link } from 'react-router-dom';
import { MenuItemType } from '../../../types/types';

const AuthorizationPanel = () => {
  const [menuList] = useState([
    {
      name: 'Вход',
      path: '/signin',
    },
    {
      name: 'Регистрация',
      path: '/login',
    },
  ] as Array<MenuItemType>);

  return (
    <ul className="navigation__auth">
      {menuList && menuList.map((item:MenuItemType, index: number) => (
        <li className={`navigation__item navigation__item_${item.path.substr(1)}`} key={index}>
          <Link to={item.path && item.path}>
            {item.name && item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AuthorizationPanel;
