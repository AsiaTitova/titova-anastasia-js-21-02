/* eslint-disable */

import React, { useState, useEffect } from 'react';
import './PostList.scss';
import { useHistory } from 'react-router-dom';
import { Pagination, Spin, Space } from 'antd';
import { PostType } from '../../../types/types';
import { PostListState } from '../../../types/state';
import PostItem from '../PostItem/PostItem';
import PostCard from '../PostCard/PostCard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State } from '../../../types/state';
import * as actions from '../../../redux/actions/posts';

interface Props {
  posts?: PostListState;
  page?: any;
  limit?: any;
  totalCount?: number;
  loading?: boolean;
  load: (pageNumber: number, limitNumber: number) => any;
}

const PostsList = ({ posts, page, limit, totalCount, loading, load }: Props) => {
  const [pageSizeArray] = useState(['10', '20', '50'] as Array<string>);
  const [postCardVisible, setPostCardVisible] = useState(false as boolean);
  const [postId, setPostId] = useState('' as string);
  const history = useHistory();

  const updatePageNumber = (current: number, limitNumber: number): void => {
    load(current, limitNumber);
  };

  useEffect(() => {
    load(page, limit);
    history.push(`/posts?page=${page}&limit=${limit}`);
  }, []);

  const onPostCardOpen = (id: string): void => {
    if (id) {
      setPostId(id);
      setPostCardVisible(true);
    }
  };
  const onPostCardClose = (): void => setPostCardVisible(false);

  return (
    <div className="post">
      {loading && (
        <Space size="middle">
          <Spin size="large" />
        </Space>
      )}
      {!loading && (
        <>
          <h1 className="post__title">Посты</h1>
          <ul className="post__list">
            {posts?.posts && posts.posts.map((item: PostType, index: number) => (
              <li className="post__item" key={index}>
                <PostItem
                  item={item}
                  onPostCardOpen={onPostCardOpen}
                />
              </li>
            ))}
          </ul>
          <div className="post__pagination">
            <Pagination
              total={totalCount}
              pageSize={limit}
              pageSizeOptions={pageSizeArray}
              current={page + 1}
              onChange={updatePageNumber}
            />
          </div>
          {postCardVisible && (
            <PostCard
              postId={postId}
              onPostCardClose={onPostCardClose}
            />
          )}
        </>
      )}
    </div>
  );
};

export default connect(
  (state: State) => ({
    posts: state.posts,
    totalCount: state.posts.total,
    page: state.posts.page,
    limit: state.posts.limit,
    loading: state.posts.loading,
    error: state.posts.error,
  }),
  (dispatch: any) => bindActionCreators(actions, dispatch),
)(PostsList);