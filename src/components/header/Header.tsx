import React, { Component } from 'react';
import './header.css';
import Search from '../form/Form';

class Header extends Component {
  render(): React.ReactNode {
    return (
      <div className="header">
        <img src="../../../public/logo.png" className="header__logo"></img>
        <Search />
      </div>
    );
  }
}

export default Header;
