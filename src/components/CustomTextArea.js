import React from "react";


class CustomTextArea extends React.Component {
  render() {
    return (
      <label>
        {this.props.areaName}
        <textarea name={this.props.name} rows={7} />
      </label>
    );
  }
}


export default CustomTextArea