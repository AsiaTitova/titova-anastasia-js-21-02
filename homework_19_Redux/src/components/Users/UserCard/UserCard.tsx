/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './UserCard.scss';
import moment from 'moment';
import useScrollToTop from '../../../utils/useScrollToTop';
import { UserType } from '../../../types/types';
import { getUserById } from '../../../api/dumMyApi';
import { State } from "../../../types/state";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { successCurrentUsersActions } from "../../../redux/actions/user";

interface Params {
  id: string,
}


interface Props {
  user: UserType,
  loadSuccess: (user: UserType) => any,
}

const UserCard = ({ user, loadSuccess }: Props) => {
  useScrollToTop();
  const params = useParams<Params>();
  const history = useHistory();

  useEffect(() => {
    getUserById(params.id, (resp: UserType) => loadSuccess(resp), (error: any) => {alert(error)});
  }, []);

  const setDateOfBirth = (date: string | any) => moment(new Date(date)).format('DD.MM.YYYY');

  return (
    <section className="user-card">
      <button className="user-card__back" type="button" onClick={history.goBack}>Назад</button>
      <div className="user-card__info">
        <div className="user-card__wrap">
          { (user && user.picture) ? <img className="user-card__img" width="100" height="100" alt="аватарка" src={user && user.picture} /> : ''}
          <h2 className="user-card__name">
            {user && user.title}  {user && user.firstName}  {user && user.lastName}
          </h2>
        </div>
        <ul className="user-card__list">
          <li className="user-card__content">
            <span>День рождения:</span>
            {user && setDateOfBirth(user.dateOfBirth)}
          </li>
          <li className="user-card__content">
            <span>Пол:</span>
            {user && user.gender}
          </li>
          <li className="user-card__content">
            <span>Email:</span>
            {user && user.email}
          </li>
          <li className="user-card__content">
            <span>Телефон:</span>
            {user && user.phone}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default connect(
  (state: State) => ({
    user: state.user.currentUser,
    loading: state.user.loading,
    error: state.user.error,
  }),
  (dispatch: any) => ({
    loadSuccess: bindActionCreators(successCurrentUsersActions, dispatch),
  }),
)(UserCard);
