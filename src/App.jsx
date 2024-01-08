// == Nơi để show những component lên trên giao diện ==
import CardRFC from "./card-rfc";
import CardRCC from "./card-rcc";
import HomePage from "./modules/buoi-1/home-page/home-page";
import BindingData from "./modules/buoi-1/binding-data/binding-data";
import HandleEvent from "./modules/buoi-1/binding-data/handle-event";
import InlineStyle from "./modules/buoi-2/style/inline";
import ExternalStyle from "./modules/buoi-2/style/external";
import ExternalStyle2 from "./modules/buoi-2/style/external-2";
import ModuleStyle from "./modules/buoi-2/style/module";
import State from "./modules/buoi-2/state/state";
import FontSize from "./modules/buoi-2/state/font-size";
import ChangeColor from "./modules/buoi-2/state/change-color";
import RandomImage from "./modules/buoi-2/state/random-image";
import Array from "./modules/buoi-2/array/array";
// Function component
/**
 * Lưu ý:
 * - Khi tạo một component thì phải đặt tên chữ Hoa viết đầu.
 * - Để phân biệt với các thẻ HTML. (div, p, h1, section, ...)
 */

function App() {
  return (
    <div className="app">
      <Array />
      {/* <RandomImage /> */}
      {/* <ChangeColor /> */}
      {/* <FontSize /> */}
      {/* <State /> */}
      {/* <ModuleStyle /> */}
      {/* <ExternalStyle /> */}
      {/* <ExternalStyle2 /> */}

      {/* <InlineStyle /> */}
      {/* <HandleEvent /> */}

      {/* <BindingData /> */}

      {/* Cách sử dụng 1 component tự tạo */}
      {/* Cách 1: Thẻ mở + Thẻ đóng */}
      {/* <CardRCC></CardRCC> */}
      {/* Cách 2: Thẻ vừa mở vừa đóng */}
      {/* <CardRCC /> */}
      {/* shift + alt + arrow down */}
      {/* <CardRFC />
    <CardRFC />
    <CardRFC /> */}

      {/* <HomePage /> */}

      {/* <CardRFC />
      <CardRCC /> */}
    </div>
  );
}

export default App;
