import React , { useState } from 'react';

const SearchInput = ({ onSearch }) => (
  <input type="search" onChange={onSearch} />
); 

export default SearchInput;