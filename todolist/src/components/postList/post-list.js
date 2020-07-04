import React from 'react';
import PostListItem from '../postListItem/post-list-item';

const PostList = ({posts, onDelete, onShow}) => {

  const elements = posts.map((item) => {
    const {id, label, show} = item;
    return (
      <PostListItem 
        key={id}
        label={label}
        show={show}
        onShow={() => onShow(id)}
        onDelete={() => onDelete(id)}/>
    );
  });

  return (
    <ul>
      {elements}
    </ul>
  );
};

export default PostList;