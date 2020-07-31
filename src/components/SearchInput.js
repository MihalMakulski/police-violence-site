import React , { useState } from 'react';

import SearchInputContainer from './styles/SearchInputStyles';

const SearchInput = ({ onSearch }) => (
  <SearchInputContainer>
    <input 
      type="search"
      placeholder="Search" 
      onChange={onSearch} 
    />
  </SearchInputContainer>
); 

export default SearchInput;