import React, { useState, useEffect } from 'react';
import './PostList.scss';
import { Pagination } from 'antd';
import { getPostList } from '../../../api/dumMyApi';
import useOnceOnMount from '../../../utils/useOnceOnMount';
import { PostType, PostListResponse, ResponseError } from '../../../types/types';
import PostItem from '../PostItem/PostItem';

const PostsList = () => {
  const [postList, setPostList] = useState([] as Array<PostType>);
  const [page, setPage] = useState(0 as number);
  const [limit, setLimit] = useState(10 as number);
  const [total, setTotal] = useState(0 as number);
  const [pageSizeArray] = useState(['10', '20', '50'] as Array<string>);

  const loadPosts = (pageNumber: number, limitNumber: number) => {
    getPostList(pageNumber, limitNumber, (resp: PostListResponse) => {
      setPostList(resp.data);
      setPage(resp.page);
      setLimit(resp.limit);
      setTotal(resp.total);
    }, ({ error }: ResponseError) => error);
  };

  const updateUsers = (pageNumber: number, limitNumber: number) => {
    getPostList(pageNumber, limitNumber, (resp: PostListResponse) => {
      setPostList(resp.data);
    }, ({ error }: ResponseError) => error);
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

  return (
    <div className="post">
      <h1 className="post__title">Посты</h1>
      <ul className="post__list">
        {postList && postList.map((item: PostType, index: number) => (
          <li className="post__item" key={index}>
            <PostItem item={item} />
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
    </div>
  );
};

export default PostsList;
