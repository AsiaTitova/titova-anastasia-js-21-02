import React from 'react';
import './Popular.scss';
import Salmon from "../../assets/salmon.jpg";
import Halibut from "../../assets/halibut.jpg";
import Tuna from "../../assets/tuna.jpg";
import Capelin from "../../assets/capelin.jpg";
import Catfish from "../../assets/catfish.jpg";
import Herring from "../../assets/herring.jpg";
import {apiResponse} from "../../api-mock/api";

const setFishImg = (img: string) => {
  switch (img) {
    case 'salmon':
      return Salmon;
    case 'halibut':
      return Halibut;
    case 'tuna':
      return Tuna;
    case 'capelin':
      return Capelin;
    case 'catfish':
      return Catfish;
    case 'herring':
      return Herring;
    default:
      return Salmon
  }
}

const location = () => {
  return window.location.href
}

export class PopularList extends React.Component {
  render() {
    return (
      <ul className="popular__list">
        {apiResponse.status === 200 ?  apiResponse.result.map((item: any, index: number) => <li className="popular__item" key={index}>
            <img className="popular__img" src={setFishImg(item.img)} width="500" height="500" alt={item.name} />
            <div className="popular__wrap">
              <a className="popular__link" href={location()}><h3 className="popular__subtitle">{item.name}</h3></a>
              <button className="popular__button" type="button">Купить</button>
            </div>
          </li>) :
          'При загрузке произошла ошибка' }
      </ul>
    )
  }
}
