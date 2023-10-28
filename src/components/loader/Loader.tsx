import React, { Component } from 'react';

class Loader extends Component {
  render(): React.ReactNode {
    return (
      <div className="loader">
        <img
          src="../../../public/loader.png"
          alt="Loader"
          className="loader__img"
        />
      </div>
    );
  }
}

export default Loader;
