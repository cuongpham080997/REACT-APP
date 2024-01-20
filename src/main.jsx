// == Kết nối với file html để show lên giao diện ==
import React from "react";
import ReactDOM from "react-dom/client";
// ---
// import default
import App from "./App.jsx";
// -- Config Redux --
import { Provider } from "react-redux";
import { rootStore } from "./redux/config.store.js";

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
    <Provider store={rootStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

// function createRoot(root) {
//   return {
//     render(component) {
//       root.append(component);
//     },
//   };
// }
