import React, { Component } from 'react';

interface State {
  hasError: boolean;
}

class ErrorButton extends Component<object, State> {
  constructor(props: object | Readonly<object>) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  handleButtonClick = () => {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      throw new Error('I crashed!');
    }
    return (
      <div>
        <button onClick={this.handleButtonClick}>ERROR</button>
      </div>
    );
  }
}

export default ErrorButton;
