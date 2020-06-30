import React from 'react';
import styled from 'styled-components';

const InputSearch = styled.input `
  width: 96%;
  border: 1px solid #d0d6dc;
  border-radius: 5px;
  padding: 10px 15px;
  margin-bottom: 20px;
`

const SearchPanel = () => {
  return(
    <InputSearch 
      type="text" 
      placeholder="Поиск по записям"
    />
  )
};

export default SearchPanel;