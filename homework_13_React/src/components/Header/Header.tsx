import React from 'react';
import './Header.scss'

export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__container container">
          <h1 className="header__logo">Интернет-магазин "Не только красивое"</h1>
        </div>
      </header>
    )
  }
}
