import React from "react";


class CustomTextArea extends React.Component {
  render() {
    return (
      <label>
        {this.props.areaName}
        <textarea
          className={this.props.className}
          name={this.props.name}
          onChange={this.props.onChange}
          value={this.props.value}
          rows={7}
          maxLength={this.props.maxLength}
        />
        <p className={this.props.className}>
          Characters remaining: {this.props.remCharacters} /600
        </p>
      </label>
    );
  }
}


export default CustomTextArea