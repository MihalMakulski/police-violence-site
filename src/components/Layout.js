import React from 'react';

const Layout = ({ children }) => (
  <>
    <header>
      <h1>Police killings 2013 - 2020</h1>
    </header>
    <div>
      <main>{children}</main>
    </div>
  </>
);

export default Layout;