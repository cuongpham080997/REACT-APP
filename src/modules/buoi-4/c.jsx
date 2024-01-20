/**
 * Lên Redux lấy state về
 * 1. Connect Component với redux
 * 2. mapStateToProps: Chuyển những state mà mình muốn lấy từ redux về component props
 *
 * Chú ý: mapStateToProps phải là tham số thứ nhất (1) của lần gọi hàm thứ nhất của connect
 */
import { connect } from "react-redux";  
import { Component } from "react";

class C extends Component {
  render() {
    // console.log(this.props);
    /**
     * {
     *   countRedux,
     *  a:10,
     *  b: 20
     * }
     */
    return (
      <div>
        <p>Count Redux: {this.props.countRedux}</p>
        <hr />
        <p>Count React: {this.props.count}</p>
      </div>
    );
  }
}

/**
 * Chuyển State từ Redux -> Props Component
 */
const mapStateToProps = (rootReducer) => {
  console.log(rootReducer);     //! Kết quả trả về là 1 đối tượng chứa các đội tượng mà ta khai báo trong hàm tạo rootReducer của config.store.js => Kết quả : {countReducer: {count: 20},}
  //  Return về Props của Component
  return {
    // propComponent: stateRedux,
    countRedux: rootReducer.countReducer.count,
    // a: 10,
    // b: 20,
  };
};

export default connect(mapStateToProps)(C);

// Trả về gì ??? Component (C + Redux): cụ thể là gọi đến mapStateToProps để trả về prop dạng react rồi gán vào props này vào component C
