import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './styles/layout.css';

const Layout = ({ children }) => (
  <div className="container">
    <Header />
    <main>{children}</main>
    <Footer>
        <div style={{marginBottom: "1em", textAlign: "center"}}>
          Data from <a href="https://mappingpoliceviolence.org/">mappingpoliceviolence.org</a>
        </div>
      </Footer>
  </div>
);

export default Layout;