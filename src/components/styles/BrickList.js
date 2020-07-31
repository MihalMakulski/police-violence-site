import styled from 'styled-components';

const BrickList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  list-style: none;
  text-transform: uppercase;
  margin: auto;
  font-size: 1.5em;

  li {
    padding: .25em .4em;
    transition: transform .1s linear;
  }
  li {
    transform: rotate(-1deg);
  }
  li:nth-child(2n) {
    transform: rotate(1.5deg);
  }
  li:nth-child(3n) {
    transform: rotate(1.2deg);
  }
  li:nth-child(4n) {
    transform: rotate(-1.5deg);
  }
  /* li:hover {
    transform: rotate(0);
  } */

  a {
    display: block;
  }
`;

export default BrickList;