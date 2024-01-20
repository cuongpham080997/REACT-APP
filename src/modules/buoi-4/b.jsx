import { Component } from "react";
import C from "./c";

class B extends Component {
  render() {
    return (
      <div>
        <C count={this.props.count} />
      </div>
    );
  }
}

export default B;
