import React from 'react';
import PostListItem from './post-list-item';

const PostList = () => {
  return (
    <ul className="app-list">
      <PostListItem label="1 запись"/>
      <PostListItem label="2 запись"/>
      <PostListItem label="3 запись"/>
    </ul>
  );
};

export default PostList;