import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #17a2b8;
  color: #ffffff;
  margin-bottom: 20px;
  h1 {
    font-size: 32px
  }
  h2 {
    font-size: 20px
  }
`
const AppHeader = () => {
  return (
    <Header>
      <h1>TodoList</h1>
      <h2>Всего 5 записей</h2>
    </Header>
  );
};

export default AppHeader;