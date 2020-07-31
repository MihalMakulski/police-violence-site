import React from 'react';
import styled from 'styled-components';

import grassBg from '../images/grass.svg';

const Footer = styled.footer`
  height: 350px;
  background-image: url(${grassBg});
  background-repeat: no-repeat;
  background-position: center bottom;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: #fff;

  a {
    color: #fff;
  }

  a:hover {
    color: #000;
    background-color: white;
  }
`;

export default Footer;