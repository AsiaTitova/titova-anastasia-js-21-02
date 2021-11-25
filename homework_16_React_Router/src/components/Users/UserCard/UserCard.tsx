import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './UserCard.scss';
// import moment from 'moment';
import useScrollToTop from '../../../utils/useScrollToTop';
import { UserType, ResponseError } from '../../../types/types';
import { getUserById } from '../../../api/dumMyApi';

interface Params {
  id: string,
}

const UserCard = () => {
  useScrollToTop();
  const [user, setUser] = useState({} as UserType);
  const params = useParams<Params>();
  const history = useHistory();

  useEffect(() => {
    getUserById(params.id, setUser, ({ error }: ResponseError) => error);
  }, []);

  // const setDateOfBirth = (date: Date) => moment(new Date(date)).format('DD.MM.YYYY');

  return (
    <section className="user-card">
      <button className="user-card__back" type="button" onClick={history.goBack}>Назад</button>
      <div className="user-card__info">
        <div className="user-card__wrap">
          { (user.picture) ? <img className="user-card__img" width="100" height="100" alt="аватарка" src={user.picture} /> : ''}
          <h2 className="user-card__name">
            {`${user.title}  ${user.firstName}  ${user.lastName}`}
          </h2>
        </div>
        <ul className="user-card__list">
          <li className="user-card__content">
            <span>День рождения:</span>
            {user.dateOfBirth}
          </li>
          <li className="user-card__content">
            <span>Пол:</span>
            {user.gender}
          </li>
          <li className="user-card__content">
            <span>Email:</span>
            {user.email}
          </li>
          <li className="user-card__content">
            <span>Телефон:</span>
            {user.phone}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default UserCard;
