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
import Footer from "./modules/buoi-3/props/footer";
import Card from "./modules/buoi-3/props/card";
import Button from "./modules/buoi-3/props/button";
import { Component } from "react";
import BtProductList from "./modules/buoi-3/bt-propduct-list";
import PhoneShop from "./modules/buoi-3/phone-shop/phone-shop";
import ChangeCarColor from "./modules/buoi-2/state/change-car-color";
import DemoVongLap from "./modules/buoi-2/array/demoVongLap";
import MovieList from "./modules/buoi-2/array/movie-list";
import DemoProps from "./modules/buoi-3/props/demo-props";
import BaiTapTruyenFunction from "./modules/buoi-3/props/BaiTapTruyenFunc/bai-tap-truyen-func";
import BaiTapGioHang from "./modules/buoi-3/props/BaiTapGioHang/BaiTapGioHang";
// Function component
/**
 * Lưu ý:
 * - Khi tạo một component thì phải đặt tên chữ Hoa viết đầu.
 * - Để phân biệt với các thẻ HTML. (div, p, h1, section, ...)
 */

class Count extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          {this.state.count}
        </button>
      </>
    );
  }
}

class House extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            width: 100,
            height: 20,
            backgroundColor: this.props.mai || "black",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: this.props.body || "blue",
          }}
        ></div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="app" style={{ display: "flex", gap: 10 }}>

      {/* {/*//* bài 3 */}
      {/* <PhoneShop/> */}


      <BaiTapGioHang/>
      {/* <BaiTapTruyenFunction/> */}
      
      {/* <DemoProps/> */}

      {/* <BtProductList/> */}

      {/* <House mai="green" body="yellow" />
      <House mai="pink" body="orange" />
      <House />
      <House /> */}

      {/* <Button
        handleClick={() => {
          console.log("click me 1");
        }}
      >
        Click Me 1
      </Button> */}

      {/* <Card img="https://i.pravatar.cc?img=1" contentBtn="Button 1" title='title1'showButton={true}/>
      <Card img="https://i.pravatar.cc?img=2" contentBtn="Button 2" title='title2'showButton={false}/> */}

      {/* name: tên props */}
      {/* CyberSoft | React: là giá trị của props đó */}
      {/* <Footer name="CyberSoft" a='cybersoft' />
      <Footer name="React" /> */}

      {/* {/*//* bài 2 */}
      {/* <MovieList/> */}
      {/* <DemoVongLap/> */}
      {/* <Array /> */}

      {/* <ChangeCarColor/> */}
      {/* <RandomImage /> */}
      {/* <ChangeColor /> */}
      {/* <FontSize /> */}
      {/* <State /> */}

      {/* <ModuleStyle /> */}

      {/* <ExternalStyle /> */}
      {/* <ExternalStyle2 /> */}

      {/* <InlineStyle /> */}

      {/* {/*//* bài 1 */}
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
