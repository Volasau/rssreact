import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render(): React.ReactNode {
    return (
      <div className="header">
        <img src="../../../public/logo.png"></img>
      </div>
    );
  }
}

export default Header;
