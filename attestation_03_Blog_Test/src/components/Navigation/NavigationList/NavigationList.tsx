/* eslint-disable */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationList.scss';
import { Menu } from 'antd';
import { PictureOutlined, UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const NavigationList = () => {
  const { t } = useTranslation();

  return (
    <nav className="navigation">
      <Menu mode="horizontal">
        <Menu.Item key={1}>
          <Link to='/users'>
            <span className="navigation__icon"><UserOutlined /></span>
            {t('navigation.users')}
          </Link>
        </Menu.Item>
        <Menu.Item key={2}>
          <Link to='/posts'>
            <span className="navigation__icon"><PictureOutlined /></span>
            {t('navigation.posts')}
          </Link>
        </Menu.Item>
      </Menu>
    </nav>
  );
};

export default NavigationList;
