// Tạo class component
//! Gõ nhanh: rcc
// import React, { Component, createElement } from "react";
import React, { Component} from "react";

// JS + HTML: jsx
// Code html trong file js.
export default class CardRCC extends Component {
  // Sử dụng method render để show nội dung lên trên giao diện. Đặt trong kết quả trả về của method render
  render() {
    //! Babel: html -> createElement. Babel đã có sẵn trong module React không cần cài đặt.
    
    return <div className="card">Card RCB</div>;   //!babel sẽ chuyển đoạn code này thành return createElement("div", { className: "card" }, "Card RCB");
  }
}
