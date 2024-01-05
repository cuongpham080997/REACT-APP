// == Kết nối với file html để show lên giao diện ==
import React from "react";
import ReactDOM from "react-dom/client";
// ---
// import default
import App from "./App.jsx";
// import CardRCC from "./card-rcc.jsx";
// import CardRFC from "./card-rfc.jsx";

// ---
// document.getElementById("root"): lấy một phần tử trên giao diện có id là root. Để show lên giao diện -> chèn các element vào trong thẻ có id là root
// Thẻ div#root là nơi bắt đầu của 1 dự án react.
// App: là thẻ do chúng ta tự tạo. Component.
// React.StrictMode: là thẻ do thư viện react tạo. Component
// React.StrictMode? mục đích import vào sử dụng để làm gì?

// Tóm tắt: Đưa các component vào bên trong thẻ div#root
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Cách sử dụng 1 component tự tạo */}
    {/* Cách 1: Thẻ mở + Thẻ đóng */}
    {/* <CardRCC></CardRCC> */}
    {/* Cách 2: Thẻ vừa mở vừa đóng */}
    {/* <CardRCC /> */}
    {/* shift + alt + arrow down */}
    {/* <CardRFC />
    <CardRFC />
    <CardRFC /> */}

    <App />
  </React.StrictMode>
);

// function createRoot(root) {
//   return {
//     render(component) {
//       root.append(component);
//     },
//   };
// }
