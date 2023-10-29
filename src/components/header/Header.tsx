import React, { Component } from 'react';
import './header.css';
import Search from '../form/Form';
import Logo from '../../../public/logo.png';

class Header extends Component {
  render(): React.ReactNode {
    return (
      <div className="header">
        <img src={Logo} className="header__logo"></img>
        <Search />
      </div>
    );
  }
}

export default Header;
