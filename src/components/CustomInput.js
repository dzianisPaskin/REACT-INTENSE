import React from 'react';

class CustomInput extends React.Component {
  render() {
    return (
      <label className="label">
        {this.props.labelName}
        <input
          className={this.props.className}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          value={this.props.value}
          // required={this.props.required}
        />
        <span className="emptyField">Empty field. Please fill out</span>
        <span className="capitalLetter">
          First and last name with a capital letter.
        </span>
      </label>
    );
  }
}

export default CustomInput;
