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
          value={this.props.record.value}
          maxLength={this.props.maxLength}
        />

        <span className="fieldError">{this.props.record.error}</span>
      </label>
    );
  }
}

export default CustomInput;
