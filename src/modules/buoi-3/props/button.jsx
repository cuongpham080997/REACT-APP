import React, { Component } from "react";

export default class Button extends Component {
  render() {
    console.log(this.props);

    return (
      <button onClick={this.props.handleClick} className="btn btn-success">
        {/* children: là giá trị truyền vào giữa thẻ mở và đóng của component */}
        {this.props.children}
      </button>
    );
  }
}
