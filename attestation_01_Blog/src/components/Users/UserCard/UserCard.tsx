/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Button, Spin, Space, Pagination} from 'antd';
import { EditOutlined, DoubleLeftOutlined } from '@ant-design/icons';
import * as actions from '../../../redux/actions/users';
import useScrollToTop from '../../../utils/useScrollToTop';
import {AuthState, PostListState, State} from '../../../types/state';
import { UserType, PostType } from '../../../types/types';
import './UserCard.scss';
import PostCard from "../../Posts/PostCard/PostCard";
import {loadUserPosts} from "../../../redux/actions/users";
import PostItem from "../../Posts/PostItem/PostItem";
// import UserEditModal from "../UserEditModal/UserEditModal";

interface Params {
  id: string,
}

interface Props {
  auth?: AuthState;
  user?: UserType;
  posts?: Array<PostType>;
  page?: any;
  limit?: any;
  total?: number;
  loading?: boolean;
  getCurrentUser: (id: string) => any;
  loadUserPosts: (id: string, page: any, limit: any) => any;
}

const UserCard = ({ auth, user, posts, page, limit, total, loading, getCurrentUser, loadUserPosts }: Props) => {
  useScrollToTop();
  const [editModalVisible, setEditModalVisible] = useState(false as boolean);
  const [postCardVisible, setPostCardVisible] = useState(false as boolean);
  const [postId, setPostId] = useState('' as string);
  const [pageSizeArray] = useState(['10', '20', '50'] as Array<string>);
  const params = useParams<Params>();
  const history = useHistory();

  useEffect(() => {
    getCurrentUser(params.id);
    loadUserPosts(params.id, page, limit);
  }, []);

  const updatePageNumber = (current: number, limitNumber: number): void => {
    loadUserPosts(params.id, current, limitNumber);
  };

  const onPostCardOpen = (id: string): void => {
    if (id) {
      setPostId(id);
      setPostCardVisible(true);
    }
  };
  const onPostCardClose = (): void => setPostCardVisible(false);

  const setFormatDate = (date: string | any) => moment(new Date(date)).format('DD.MM.YYYY');

  const setTitle = (gender: string | any, title?: string) => {
    if (title) {
      return title;
    }
    switch (gender) {
      case 'male':
        return 'mr';
      case 'female':
        return 'ms';
      default:
        return '';
    }
  };

  const setGender = (gender: string | any) => {
    switch (gender) {
      case 'male':
        return 'Мужской';
      case 'female':
        return 'Женский';
      default:
        return 'Другое';
    }
  };

  const onUserEditModalOpen = () => {
    setEditModalVisible(true);
  }

  const onUserEditModalClose = () => {
    setEditModalVisible(false);
  }

  return (
    <section className="user-card">
      {loading && (
        <Space size="middle">
          <Spin size="large" />
        </Space>
      )}
      {!loading && (
        <>
          <Button type="link" className="user-card__back" icon={<DoubleLeftOutlined />} onClick={history.goBack}>Назад</Button>
          <div className="user-card__info">
            <div className="user-card__wrap">
              { (user && user.picture) ? <img className="user-card__img" width="100" height="100" alt="аватарка" src={user.picture} /> : <img className="user-card__img" width="100" height="100" alt="аватарка" src="./img/avatar.jpg" />}
              <div className="user-card__name-wrap">
                <h2 className="user-card__name">
                  {`${setTitle(user && user.gender, user && user.title)} ${user && user.firstName} ${user && user.lastName}`}
                </h2>
                { auth && auth.id === params.id ? (
                  <button className="user-card__edit" type="button" onClick={onUserEditModalOpen}>
                    <EditOutlined />
                  </button>) : ''}
                <p className="user-card__content user-card__content_id">
                  <span>ID:</span>
                  {user && user.id}
                </p>
              </div>
            </div>
            <ul className="user-card__list">
              <li className="user-card__content">
                <span>День рождения:</span>
                {setFormatDate(user && user.dateOfBirth)}
              </li>
              <li className="user-card__content">
                <span>Дата регистрации:</span>
                {setFormatDate(user && user.registerDate)}
              </li>
              <li className="user-card__content">
                <span>Пол:</span>
                {setGender(user && user.gender)}
              </li>
            </ul>
            <ul className="user-card__list">
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
        </>
      )}
      <ul className="post__list">
        {posts && posts.map((item: PostType, index: number) => (
          <li className="post__item" key={index}>
            <PostItem item={item} key={index} onPostCardOpen={onPostCardOpen} />
          </li>))}
      </ul>
      <div className="post__pagination">
        <Pagination
          total={total}
          pageSize={limit}
          pageSizeOptions={pageSizeArray}
          current={page + 1}
          onChange={updatePageNumber}
        />
    </div>

      {postCardVisible && <PostCard postId={postId} onPostCardClose={onPostCardClose} /> }
      {/*{editModalVisible && (*/}
      {/*  <UserEditModal*/}
      {/*    user={user}*/}
      {/*    onUserEditModalClose={onUserEditModalClose}*/}
      {/*  />*/}
      {/*)}*/}
    </section>
  );
};

export default connect(
  (state: State) => ({
    auth: state.auth,
    loading: state.users.loading,
    error: state.users.error,
    user: state.users.user,
    posts: state.users.posts,
    total: state.users.total,
    page: state.users.page,
    limit: state.users.limit,
  }),
  (dispatch: any) => bindActionCreators(actions, dispatch),
)(UserCard);