import React, { Component } from "react";
import CardRCC from "../../../card-rcc";

export default class BindingData extends Component {
  render() {
    // Để binding data lên trên giao diện thì dùng dấu ngoặc nhọn: {  }
    // - Những kiểu dữ liệu nào chúng ta có thể binding lên được.
    // String, Number, Array, thẻ html, component của chúng ta.
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
