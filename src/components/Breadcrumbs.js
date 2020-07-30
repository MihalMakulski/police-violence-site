import React from 'react';
import { Link } from 'gatsby';

const Breadcrumbs = ({ state }) => (
  <div>
    <Link to="/">Home</Link> / <span>{state}</span>
  </div>
);

export default Breadcrumbs;