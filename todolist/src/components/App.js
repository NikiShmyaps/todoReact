import React from 'react';
import AppHeader from './app-header';
import styled from 'styled-components';
import SearchPanel from './search-panel';
import PostList from './post-list';
import PostAddForm from './post-add-form';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

const App = () => {
  return (
    <>
      <AppHeader/>
      <AppBlock>
        <PostAddForm/>
        <SearchPanel/>
        <PostList/>
      </AppBlock>
    </>
  );
}

export default App;
