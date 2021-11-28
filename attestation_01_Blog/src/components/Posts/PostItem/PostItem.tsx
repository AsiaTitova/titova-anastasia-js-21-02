import React from 'react';
import './PostItem.scss';
import { PostType } from '../../../types/types';
import UserAvatar from '../../Users/UserAvatar/UserAvatar';

interface Props {
  item: PostType;
  onPostCardOpen: (id: string) => void;
}

const UserItem = ({ item, onPostCardOpen }: Props) => (
  <div className="post__card" onClick={() => item.id && onPostCardOpen(item.id)}>
    <div className="post__head">
      <UserAvatar user={item.owner && item.owner} />
      <p className="post__publish">
        <span>{item.publishDate && item.publishDate.split('T')[0].split('-').reverse().join('.')}</span>
        <span> в </span>
        <span>
          {item.publishDate && item.publishDate.split('T')[1].split(':')[0]}
          :
          {item.publishDate && item.publishDate.split('T')[1].split(':')[1]}
        </span>
      </p>
    </div>
    <div className="post__content">
      <img className="post__image" src={item.image && item.image} alt=" " />
      <p className="post__text">{item.text && item.text}</p>
    </div>
  </div>
);

export default UserItem;
