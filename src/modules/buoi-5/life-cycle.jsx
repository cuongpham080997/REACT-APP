import { Component } from "react";

export default class LifeCycle extends Component {
  constructor() {
    console.log("[LifeCycle] constructor");
    super();
    this.state = {
      count: 0,
    };

    this.id = setInterval(() => {
      // Bất đồng bộ:
      this.setState(
        {
          count: this.state.count + 1,
        },
        () => {
          console.log({ count: this.state.count });
        }
      );
      // Vẫn được thực thi.
      console.log({ count: this.state.count });
    }, 1000);
  }

  static getDerivedStateFromProps() {
    console.log("[LifeCycle] getDerivedStateFromProps");

    return null;
  }
  componentDidMount() {
    // setInterval(() => {
    //   this.setState({
    //     count: this.state.count + 1,
    //   });
    // }, 1000);
    console.log("[LifeCycle] componentDidMount");
  }

  // --
  shouldComponentUpdate() {
    console.log("[LifeCycle] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[LifeCycle] componentDidUpdate");
  }

  // --
  componentWillUnmount() {
    console.log("[LifeCycle] componentWillUnmount");
    clearInterval(this.id);
  }

  render() {
    // setInterval(() => {
    //   this.setState({
    //     count: this.state.count + 1,
    //   });
    // }, 1000);
    console.log("[LifeCycle] render");
    return <div>Count: {this.state.count}</div>;
  }
}

/**
 * sẽ gọi function sau 1000. Gọi bao nhiêu lần 1
 * setTimeout(()=>{},1000)
 *
 * setInterval: sau mỗi ms sẽ gọi function
 * setInterval(()=>{},1000)
 */

// class Animal {
//   a() {
//     console.log("a");
//   }
//   // Chỉ cho phép lớp đối tượng gọi.
//   // Đối tượng (instance): không lấy được những method hay thuộc tính có static đứng đầu.
//   static bbbbbb() {
//     console.log("b");
//   }
// }
// const dog = new Animal();

// dog.a
// dog.b ❌

// Animal.bbbbbb()
