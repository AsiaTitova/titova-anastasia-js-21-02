import React from 'react';
import './Footer.scss'

export class Footer extends React.Component {
  render() {
    return (
      <footer className="footer footer_theme_dark">
        <div className="footer__container container">
          <p className="footer__subtitle">Контакты</p>
          <p className="footer__content">&#169; 2021 ИП Рыбов О.А.</p>
        </div>
      </footer>
    )
  }
}
