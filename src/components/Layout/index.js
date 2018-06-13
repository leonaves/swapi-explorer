import React from 'react';

import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Layout.css';

const Layout = ({ children }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to the SWAPI Explorer</h1>
    </header>
    <div className="container mt-5">
      {children}
    </div>
  </div>
);

export default Layout;
