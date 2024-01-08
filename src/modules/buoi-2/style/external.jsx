import React, { Component } from "react";
// Để nhận file css trong react thì chúng ta phải import file đó vào.
import "./external.css";

//style global
export default class ExternalStyle extends Component {
  render() {
    return (
      <div className="container-external">
        ExternalStyle
        <h1 className="heading-1">Title</h1>
      </div>
    );
  }
}
