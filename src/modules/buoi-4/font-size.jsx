import React, { Component } from "react";
import { connect } from "react-redux";
class TangGiamFontSize extends Component {
  render() {
    // this.props.fontSize = 16
    // this.props.tangFontSize
    return (
      <div>
        <p
          style={{
            fontSize: this.props.fontSize,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ea.
        </p>

        <button
          onClick={() => {
            this.props.tangFontSize();
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.props.giamFontSize();
          }}
        >
          -
        </button>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    fontSize: rootReducer.tangGiamReducer.fz,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tangFontSize: () => {
      dispatch({
        type: "tangFontSize",
      });
    },

    giamFontSize: () => {
      dispatch({
        type: "giamFontSize",
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TangGiamFontSize);
