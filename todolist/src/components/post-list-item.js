import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  border: 1px solid #d0d6dc;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;
  background: #ffffff;
  cursor: pointer;
  :hover span {
    color: #148da0;
  }
  span {
    transition: 0.5s;
  }
  button {
    margin-left: 5px;
    background: #17a2b8;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    cursor: pointer;
    transition: 0.5s;
    outline: none;
    :hover {
      background: #148da0;
    }
  }
`

const PostListItem = ({label}) => {
  return (
    <ListItem>
      <span className="app-list-item-label">
        {label}
      </span>
      <div className="d-flex justify-content-center">
        <button 
          type="button"
        >изменить
        </button>
        <button
          type="button" 
        >удалить
        </button>
      </div>
    </ListItem>
  );
};

export default PostListItem;