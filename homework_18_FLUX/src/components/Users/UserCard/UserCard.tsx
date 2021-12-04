/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './UserCard.scss';
import moment from 'moment';
import useScrollToTop from '../../../utils/useScrollToTop';
import { UserType, ResponseError } from '../../../types/types';
import { getUserById } from '../../../api/dumMyApi';
import { UserState } from "../../../types/state";
import userStore from "../../../stores/user";

interface Params {
  id: string,
}

const UserCard = () => {
  useScrollToTop();
  const [userState, setUserState] = useState({} as UserState);
  const params = useParams<Params>();
  const history = useHistory();

  useEffect(() => {
    userStore.on('change', () => {
      const resp: UserState = userStore.getState();
      if (resp.currentUser) {
        setUserState({ ...resp });
      }
        console.log(userState);
    });
    getUserById(params.id, (resp: UserType) => setUserState({ currentUser: resp, isLoading: false }), ({ error }: ResponseError) => error);
  }, []);

  const setDateOfBirth = (date: string | any) => moment(new Date(date)).format('DD.MM.YYYY');

  return (
    <section className="user-card">
      <button className="user-card__back" type="button" onClick={history.goBack}>Назад</button>
      <div className="user-card__info">
        <div className="user-card__wrap">
          { (userState.currentUser && userState.currentUser.picture) ? <img className="user-card__img" width="100" height="100" alt="аватарка" src={userState.currentUser && userState.currentUser.picture} /> : ''}
          <h2 className="user-card__name">
            {userState.currentUser && userState.currentUser.title}  {userState.currentUser && userState.currentUser.firstName}  {userState.currentUser && userState.currentUser.lastName}
          </h2>
        </div>
        <ul className="user-card__list">
          <li className="user-card__content">
            <span>День рождения:</span>
            {userState.currentUser && setDateOfBirth(userState.currentUser.dateOfBirth)}
          </li>
          <li className="user-card__content">
            <span>Пол:</span>
            {userState.currentUser && userState.currentUser.gender}
          </li>
          <li className="user-card__content">
            <span>Email:</span>
            {userState.currentUser && userState.currentUser.email}
          </li>
          <li className="user-card__content">
            <span>Телефон:</span>
            {userState.currentUser && userState.currentUser.phone}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default UserCard;
