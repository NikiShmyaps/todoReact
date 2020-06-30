import React from 'react';
import styled from 'styled-components';

const AddForm = styled.form `
  margin: 30px 0;
  display: flex;
  justify-content: center;
  input {
    width: 620px;
    padding: 10px 15px;
    border: 1px solid #d0d6dc;
    border-radius: 5px;
    outline: none;
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
const PostAddForm = () => {
  return (
    <AddForm>
      <input
        type="text"
        placeholder="Добавить запись"
      />
      <button
        type="submit"
      >Добавить запись</button>
    </AddForm>
  );
};

export default PostAddForm;