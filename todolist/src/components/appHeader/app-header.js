import React from 'react';
import './app-header.sass';

const AppHeader = ({allPosts}) => {
  return (
    <header className="header">
      <h1 className="header__title">TodoList</h1>
      <h2 className="header__subtitle">Всего {allPosts} записей</h2>
    </header>
  );
};

export default AppHeader;