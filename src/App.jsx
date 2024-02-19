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
import { Component,useState } from "react";
import BtProductList from "./modules/buoi-3/bt-propduct-list";
import PhoneShop from "./modules/buoi-3/phone-shop/phone-shop";
import ChangeCarColor from "./modules/buoi-2/state/change-car-color";
import DemoVongLap from "./modules/buoi-2/array/demoVongLap";
import MovieList from "./modules/buoi-2/array/movie-list";
import DemoProps from "./modules/buoi-3/props/demo-props";
import BaiTapTruyenFunction from "./modules/buoi-3/props/BaiTapTruyenFunc/bai-tap-truyen-func";
import BaiTapGioHang from "./modules/buoi-3/props/BaiTapGioHang/BaiTapGioHang";
import DemoProps2 from "./modules/buoi-4/demo-props";
import TangGiamFontSize from "./modules/buoi-4/font-size";
import ReduxObject from "./modules/buoi-4/redux-object";
import LifeCycle from "./modules/buoi-5/life-cycle";
import FontSizeFC from "./modules/buoi-5/function-component/font-size";
import Lamp from "./modules/buoi-6/lamp";
import Random from "./modules/buoi-6/random";
import UseEffect from "./modules/buoi-6/use-effect";
import TodoList from "./modules/buoi-6/todo-list";
import CleanUp from "./modules/buoi-7/clean-up";
import CleanUp2 from "./modules/buoi-7/clean-up_2";
import DiaDiem from "./modules/buoi-7/dia-diem";
import UseRef from "./modules/buoi-7/use-ref";
import UseContent, { Provider } from "./modules/buoi-7/use-context";
import { Counter,useCounter } from "./modules/buoi-7/custom-hook";
import Input from "./modules/buoi-8/input";
import AdminLaptop from "./modules/admin-laptop/admin-laptop";
import FontSizeBuoi9 from "./modules/buoi-9/font-size";
import ChangeColorBuoi9 from "./modules/buoi-9/change-color";
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
  const [show, setShow] = useState(true);
  const [c,setC] = useState(true)
  const [{ count }, { handleTang5 }] = useCounter();
  
  return (

    <div className="app" style={{ display: "flex", gap: 10 }}>

      {/* {/*//* bài 9 */}
      <ChangeColorBuoi9/>
      {/* <FontSizeBuoi9/> */}
      
      
      {/* {/*//* bài 8 */}
      {/* <AdminLaptop/> */}
      {/* <Input/> */}
      
      {/* {/*//* bài 7 */}
      {/* <Counter/> */}

      {/* <Provider>
        <UseContent/>
      </Provider> */}
      

      {/* <UseRef/> */}

      {/* <DiaDiem/> */}
      
      {/* <CleanUp2/> */}

      {/* <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle
      </button>
      {show ? <CleanUp /> : null} */}


      {/* {/*//* bài 6 */}
      {/* <TodoList/> */}
      {/* <UseEffect/> */}
      {/* <Random/> */}
      {/* <Lamp/> */}

      
      {/* {/*//* bài 5 */}
      {/* <FontSizeFC/> */}

            {/* <button
        onClick={() => {
          setC(!c);
        }}
      >
        Toggle
      </button>
      {c && <LifeCycle/>} */}



      {/* {/*//* bài 4 */}
      {/* <ReduxObject/> */}
      {/* <TangGiamFontSize/> */}
      {/* <DemoProps2/> */}


      {/* {/*//* bài 3 */}
      {/* <PhoneShop/> */}

      {/* <BaiTapGioHang/> */}
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
