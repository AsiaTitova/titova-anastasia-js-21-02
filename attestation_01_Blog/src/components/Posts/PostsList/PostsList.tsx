import React, { useState, useEffect } from 'react';
import './PostList.scss';
import { useHistory } from 'react-router-dom';
import { Pagination, Spin, Space } from 'antd';
import { getPostList } from '../../../api/dumMyApi';
import useOnceOnMount from '../../../utils/useOnceOnMount';
import { PostType, PostListResponse, ResponseError } from '../../../types/types';
import PostItem from '../PostItem/PostItem';
import PostCard from '../PostCard/PostCard';

const PostsList = () => {
  const [postList, setPostList] = useState([] as Array<PostType>);
  const [page, setPage] = useState(0 as number);
  const [limit, setLimit] = useState(10 as number);
  const [total, setTotal] = useState(0 as number);
  const [pageSizeArray] = useState(['10', '20', '50'] as Array<string>);
  const [loading, setLoading] = useState(false as boolean);
  const [postCardVisible, setPostCardVisible] = useState(false as boolean);
  const [postId, setPostId] = useState('' as string);
  const history = useHistory();

  const loadPosts = (pageNumber: number, limitNumber: number) => {
    setLoading(true);
    getPostList(pageNumber, limitNumber, (resp: PostListResponse) => {
      setPostList(resp.data);
      setPage(resp.page);
      setLimit(resp.limit);
      setTotal(resp.total);
      setLoading(false);
      history.push(`/posts?page=${page}&limit=${limit}`);
    }, ({ error }: ResponseError) => {
      error;
      setLoading(false);
    });
  };

  const updateUsers = (pageNumber: number, limitNumber: number) => {
    setLoading(true);
    getPostList(pageNumber, limitNumber, (resp: PostListResponse) => {
      setPostList(resp.data);
      setLoading(false);
      history.push(`/posts?page=${page}&limit=${limit}`);
    }, ({ error }: ResponseError) => {
      error;
      setLoading(false);
    });
  };

  const updatePageNumber = (current: number, limitNumber: number): void => {
    setPage(current);
    setLimit(limitNumber);
  };

  useOnceOnMount(() => {
    loadPosts(page, limit);
  });

  useEffect(() => {
    updateUsers(page, limit);
  }, [page, limit]);

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
            {postList && postList.map((item: PostType, index: number) => (
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
              total={total}
              pageSize={limit}
              pageSizeOptions={pageSizeArray}
              current={page}
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

export default PostsList;
