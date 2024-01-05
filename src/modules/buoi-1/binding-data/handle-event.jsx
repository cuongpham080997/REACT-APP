import React, { Component } from "react";

/**
 *! Nên Sử dụng arrow function cho mọi function hoặc method.
 *! Arrow function không có ngữ cảnh (context) riêng.
 */
export default class HandleEvent extends Component {
  handleClick = () => {
    console.log("hello");
  };

  print = (name) => {
    console.log("Name: ", name);
  };

  //! Curry function: tạo ra 1 function và trả về 1 function
  print2(name) {
    // closure
    // Lúc tạo ra function này thì nó nhớ là name có giá trị là 'hoa 2'
    return () => {
      console.log("Name: ", name);
    };
  }

  render() {
    // Nhấn button thì log ra chữ hello
    return (
      <div>
        {/* {createElement(
          "button",
          {
            // JS: onclick
            onClick: () => {
              console.log("hello");
            },
          },
          "click me"
        )} */}

        {/* onSuKien */}
        <button onClick={this.handleClick}>Click me</button>

        <button
          onClick={() => {
            this.print("Hoa");
          }}
        >
          Print Hoa
        </button>

        <button onClick={this.print2("Hoa 2")}>Print Hoa 2</button>
      </div>
    );
  }
}
