import React, { Component } from "react";

export default class FontSize extends Component {
  /**
   * 1. Xác định state ( tên và kiểu dữ liệu ). ✅
   * 2. Binding state ( Khi state thay đổi thì giao diện thay đổi ). ✅
   * 3. Trigger ( Khi click button thì sẽ cập nhật state ).
   */
  constructor() {
    super();

    this.state = {
      fontSize: 16,
    };
  }
  render() {
    // Tăng giảm font size của thẻ p
    return (
      <div>
        <p
          style={{
            fontSize: this.state.fontSize,
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
          numquam.
        </p>

        <div>
          <button
            onClick={() => {
              const newState = {
                fontSize: this.state.fontSize + 1,
              };

              this.setState(newState);
            }}
            className="btn btn-success mx-2"
          >
            +
          </button>
          <button
            onClick={() => {
              this.setState({
                fontSize: this.state.fontSize - 1,
              });
            }}
            className="btn btn-success"
          >
            -
          </button>
        </div>
      </div>
    );
  }
}
