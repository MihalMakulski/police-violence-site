import styled from 'styled-components';

import mGlass from '../../images/m-glass.svg';

const SearchInputStyles = styled.div`
  text-align: center;
  padding: 3em 0;
  
  input {
    border: none;
    border-bottom: 2px solid #000;
    padding: .5em .5em .5em 2.3em;
    outline: none;
    font-family: "Space Mono", monospace;
    background-image: url(${mGlass});
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 5px center;
  }
`;

export default SearchInputStyles;