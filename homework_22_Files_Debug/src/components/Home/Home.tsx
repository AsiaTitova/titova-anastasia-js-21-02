/* eslint-disable */
import React from 'react';
import './Home.scss';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__wrap">
          <h1 className="promo__title">{t('home.title')}</h1>
          <p className="promo__text">{t('home.slogan')}</p>
        </div>
        <img className="promo__img" src="./img/dogs.jpg" width="2191" height="913" alt="dogs" />
        <img className="promo__img promo__img_dark" src="./img/dog-dark.jpg" width="2191" height="913" alt="dogs" />
      </div>
    </section>
  );
}

export default Home;
