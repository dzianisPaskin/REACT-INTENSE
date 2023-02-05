import React from 'react';

class Button extends React.Component {
  render() {
    return <button type={this.props.type}>{this.props.innerText}</button>;
  }
}

export default Button;
