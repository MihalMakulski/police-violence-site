import React from 'react';

import Header from '../components/Header';

import './styles/layout.css';

const Layout = ({ children }) => (
  <div className="container">
    <Header />
    <div>
      <main>{children}</main>
    </div>
  </div>
);

export default Layout;