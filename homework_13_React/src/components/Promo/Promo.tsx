import React from 'react';
import './Promo.scss';

const location = () => {
  return window.location.href
}

export class Promo extends React.Component {
  render() {
    return (
      <section className="main_promo promo">
        <div className="promo__container">
          <h2 className="promo__title">Рыбы на любой вкус</h2>
          <p className="promo__slogan">Мы продаём рыбов, а не только показываем!</p>
          <ul className="promo__list">
            <li className="promo__item">
              <h3 className="promo__subtitle"><a className="promo__link" href={location()}>Замороженные рыбы</a></h3>
              <p className="promo__content">Мы заморозили рыбов для вас</p>
            </li>
            <li className="promo__item">
              <h3 className="promo__subtitle"><a className="promo__link" href={location()}>Живые рыбы</a></h3>
              <p className="promo__content">На кухню или на разведение</p>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}
