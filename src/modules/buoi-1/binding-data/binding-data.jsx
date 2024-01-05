import React, { Component } from "react";
import CardRCC from "../../../card-rcc";

export default class BindingData extends Component {
  getTitle() {
    // return thuộc kiểu dữ liệu có thể hiển thị lên được.
    return <h2>Xin chào các bạn</h2>;
    return "Xin chào các bạn.";
  }

  render() {
    // Để binding data lên trên giao diện thì dùng dấu ngoặc nhọn: {  }
    // { }: Dùng để gọi method hoặc sử dụng biến bên trong html.

    // - Những kiểu dữ liệu nào chúng ta có thể binding lên được.
    // String, Number, Array, thẻ html, component của react.
    // - Những kiểu dữ liệu nào không thể binding lên được.
    // Boolean, null, undefined

    // Object: Chỉ dành để show những thẻ do react tạo ra - tương ứng với thẻ html
    const title = "Cyber Soft";
    const number = 100;
    const bool = true;
    const n = null;

    return (
      <div>
        <h1>BindingData</h1>

        {/* Để gọi method getTitle */}
        {this.getTitle()}

        <p>Title: {title}</p>
        <p>Number: {number}</p>
        <p>Boolean: {bool}</p>
        <p>Null: {n}</p>
        <p>Undefined: {undefined}</p>

        {/* Chuyển Array -> String: join */}
        <p>Array: [{[1, 2].join(", ")}]</p>
        <p>
          HTML: <span>html</span>
        </p>
        <p>
          Component: <CardRCC />
        </p>
      </div>
    );
  }
}
