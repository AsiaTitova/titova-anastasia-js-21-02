import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import NavigationList from '../Navigation/NavigationList/NavigationList';
import AuthorizationPanel from '../Navigation/AuthorizationPanel/AuthorizationPanel';

interface Props {
  auth: boolean;
}

const Header = ({ auth }: Props) => (
  <header className="header">
    <div className="header__container">
      <div className="header__logo logo"><Link to="/">Dogs Blog</Link></div>
      <NavigationList />
      <AuthorizationPanel auth={auth} />
    </div>
  </header>
);

export default Header;
