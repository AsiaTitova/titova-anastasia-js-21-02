/* eslint-disable */
import React, { useState, useEffect } from 'react';
import './PostCard.scss';
import { Spin, Space } from 'antd';
import { CloseOutlined, TagsOutlined } from '@ant-design/icons';
import {
  PostType,
  CommentType,
  CommentListResponse,
  ResponseError,
} from '../../../types/types';
import { getPostById, getCommentsByPost } from '../../../api/dumMyApi';
import UserAvatar from '../../Users/UserAvatar/UserAvatar';
import PostComment from '../PostComment/PostComment';

interface Props {
  postId: string | any;
  onPostCardClose?: () => void;
}

const UserCard = ({ postId, onPostCardClose }: Props) => {
  const [post, setPost] = useState({} as PostType);
  const [comments, setComments] = useState([] as Array<CommentType>);
  const [loading, setLoading] = useState(false as boolean);

  const getComments = () => {
    getCommentsByPost(postId, (resp: CommentListResponse) => {
      setComments(resp.data);
      setLoading(false);
    }, ({ error }: ResponseError) => {
      error;
      setLoading(false);
    });
  };

  useEffect(() => {
    setLoading(true);
    getPostById(postId, (resp: PostType) => {
      setPost(resp);
      getComments();
    }, ({ error }: ResponseError) => {
      error;
      setLoading(false);
    });
  }, []);

  return (
    <div className="post-card">
      <div className="post-card__modal">
        {loading && (
          <Space size="middle">
            <Spin size="large" />
          </Space>
        )}
        {!loading && (
          <>
            <div className="post-card__head">
              {post.owner && post.owner.id && post.owner.firstName && post.owner.lastName && post.owner.picture &&
                <UserAvatar
                  id={post.owner.id}
                  firstName={post.owner.firstName}
                  lastName={post.owner.lastName}
                  picture={post.owner.picture}
                />
              }
              <p className="post-card__publish">
                <span>{post.publishDate && post.publishDate.split('T')[0].split('-').reverse().join('.')}</span>
                <span> в </span>
                <span>
                  {post.publishDate && post.publishDate.split('T')[1].split(':')[0]}
                  :
                  {post.publishDate && post.publishDate.split('T')[1].split(':')[1]}
                </span>
              </p>
              <button className="post-card__close" type="button" onClick={onPostCardClose}>
                <CloseOutlined />
              </button>
            </div>
            <div className="post-card__content">
              <img className="post-card__image" src={post.image && post.image} alt=" " />
              <div className="post-card__tags">
                <TagsOutlined />
                {post.tags && post.tags.map((tag: string, index: number) => (
                  <p className="post-card__tag" key={index}>
                    #
                    {tag}
                  </p>
                ))}
              </div>
              <p className="post-card__text">{post.text && post.text}</p>
              <div className="post-card__comments comments">
                <h2 className="comments__title">Комментарии</h2>
                { comments.length ? (
                  <ul className="comments__list">
                    {comments.map((item: CommentType, index: number) => <PostComment item={item} key={index} />)}
                  </ul>
                ) : (<p className="comments__empty">Нет комментариев :(</p>)}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserCard;
