/* eslint-disable */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { MenuItem } from '../../types/types';

const MenuList = () => {
  const [menuList] = useState([{
    name: 'Список пользователей',
    path: '/',
  },
  {
    name: 'Регистрация',
    path: '/registration',
  }] as Array<MenuItem>);

  return (
    <Menu mode="horizontal" theme="dark">
      { menuList && menuList.map((item, index) => (
        <Menu.Item key={index}>
          <Link to={item.path}>{item.name}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuList;
