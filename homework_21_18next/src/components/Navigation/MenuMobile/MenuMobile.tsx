/* eslint-disable */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  AppstoreOutlined,
  PictureOutlined,
  UserOutlined,
  LoginOutlined,
  UsergroupAddOutlined,
  KeyOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../redux/actions/posts';
import { State } from '../../../types/state';
import './MenuMobile.scss';
import { useTranslation } from 'react-i18next';

interface Props {
  auth?: boolean;
}

const MenuMobile = ({ auth }: Props) => {
  const { t } = useTranslation();
  const [authUserId] = useState(window.localStorage.getItem('user_id') as string);
  const [visibleMenu, setVisibleMenu] = useState(false as boolean);
  const history = useHistory();

  const logOut = () => {
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('user_id');
    window.localStorage.removeItem('auth');
    window.location.reload();
  };

  const goToUserProfile = (): any => {
    history.push(`/user/${authUserId && authUserId.slice(1, -1)}`);
    window.location.reload();
  };

  return (
    <header className="menu">
      <div className="menu__container">
        <button className="menu__button" type="button" onClick={() => setVisibleMenu(!visibleMenu)}>
          <AppstoreOutlined />
        </button>
        {visibleMenu && (
          <ul className="menu__list">
            <li className="menu__item">
              <Link to='/users'>
                <span className="navigation__icon"><UserOutlined /></span>
                {t('navigation.users')}
              </Link>
            </li>
            <li className="menu__item">
              <Link to='/signin'>
                <span className="navigation__icon"><PictureOutlined /></span>
                {t('navigation.posts')}
              </Link>
            </li>
            {!auth && (
              <>
                <li className="menu__item">
                  <Link to='/signin'>
                    <span className="navigation__icon"><LoginOutlined /></span>
                    {t('authPanel.signIn')}
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to='/login'>
                    <span className="navigation__icon"><UsergroupAddOutlined /></span>
                    {t('authPanel.logIn')}
                  </Link>
                </li>
              </>
              )}
            {auth && (
              <>
                <li className="menu__item">
                  <button type="button" onClick={goToUserProfile}>
                    <span className="menu__icon">
                      <KeyOutlined />
                    </span>
                    {t('authPanel.personalArea')}
                  </button>
                </li>
                <li className="menu__item">
                  <button className="menu__logout" onClick={logOut} type="button">
                    <span className="menu__icon">
                      <LogoutOutlined />
                    </span>
                    {t('authPanel.logOut')}
                  </button>
                </li>
              </>
            )}
          </ul>
        )}
      </div>
    </header>
  );
};

MenuMobile.defaultProps = {
  auth: false,
};

export default connect(
  (state: State) => ({
    auth: state.auth.auth,
    id: state.auth.id,
  }),
  (dispatch: any) => bindActionCreators(actions, dispatch),
)(MenuMobile);
