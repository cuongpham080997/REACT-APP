// == Nơi để show những component lên trên giao diện ==
import CardRFC from "./card-rfc";
import CardRCC from "./card-rcc";
import HomePage from "./modules/buoi-1/home-page/home-page";
import BindingData from "./modules/buoi-1/binding-data/binding-data";
// Function component
/**
 * Lưu ý:
 * - Khi tạo một component thì phải đặt tên chữ Hoa viết đầu.
 * - Để phân biệt với các thẻ HTML. (div, p, h1, section, ...)
 */
function App() {
  return (
    //! trong file .jsx thì muốn đặt thuộc tính class trong thẻ thì chuyển class -> className. Mục đích là để trách khai bao trùng với class(lớp) trong js
    <div className ='app'>
      {/* <HomePage/> */}
      <BindingData/>


      {/* <CardRFC />
      <CardRCC /> */}
    </div>
  );
}

export default App;
