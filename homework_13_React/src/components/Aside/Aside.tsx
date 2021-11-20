import React from 'react';
import './Aside.scss'

export class Aside extends React.Component {
  render() {
    return (
      <aside className="page__navigation navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <div className="navigation__subtitle">Морская рыба</div>
            <ul className="navigation__fish-list fish-list">
              <li className="fish-list__item">
                <input className="form__input" type="checkbox" id="shark" name="fish" />
                  <label className="form__label" htmlFor="shark">Акула</label>
              </li>
              <li className="fish-list__item">
                <input className="form__input" type="checkbox" id="perch" name="fish" />
                  <label className="form__label" htmlFor="perch">Окунь</label>
              </li>
              <li className="fish-list__item">
                <input className="form__input" type="checkbox" id="halibut" name="fish" />
                  <label className="form__label" htmlFor="halibut">Палтус</label>
              </li>
              <li className="fish-list__item">
                <input className="form__input" type="checkbox" id="cod" name="fish" />
                  <label className="form__label" htmlFor="cod">Треска</label>
              </li>
            </ul>
          </li>
          <li className="navigation__item">
            <div className="navigation__subtitle">Пресноводная рыба</div>
            <ul className="navigation__fish-list fish-list">
              <li className="fish-list__item">
                <input className="form__input" type="checkbox" id="white-eyed" name="fish" />
                  <label className="form__label" htmlFor="white-eyed">Белоглазка</label>
              </li>
              <li className="fish-list__item">
                <input className="form__input" type="checkbox" id="sturgeon" name="fish" />
                  <label className="form__label" htmlFor="sturgeon">Осётр</label>
              </li>
              <li className="fish-list__item">
                <input className="form__input" type="checkbox" id="river eel" name="fish" />
                  <label className="form__label" htmlFor="river eel">Речной угорь</label>
              </li>
              <li className="fish-list__item">
                <input className="form__input" type="checkbox" id="burbot" name="fish" />
                  <label className="form__label" htmlFor="burbot">Налим</label>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    )
  }
}
