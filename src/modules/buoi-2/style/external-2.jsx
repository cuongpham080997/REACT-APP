import React, { Component } from "react";
// Để nhận file css trong react thì chúng ta phải import file đó vào.
import "./external-2.css";

// style global
export default class ExternalStyle2 extends Component {
  render() {
    return (
      <div className="container-external">
        ExternalStyle 2<h1 className="heading-1">Title 2</h1>
      </div>
    );
  }
}
