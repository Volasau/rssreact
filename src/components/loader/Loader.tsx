import React, { Component } from 'react';
import Loaderimg from '../../../public/loader.png';

class Loader extends Component {
  render(): React.ReactNode {
    return (
      <div className="loader">
        <img src={Loaderimg} alt="Loader" className="loader__img" />
      </div>
    );
  }
}

export default Loader;
