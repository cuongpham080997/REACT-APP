import React, { Component } from "react";

export default class CardPhone extends Component {
  render() {
    const {data :product} = this.props
    return (
      <div key={product.maSP} className="card" style={{ width: "18rem" }}>
        <img src={product.hinhAnh} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.tenSP}</h5>
          <p>{product.giaBan}</p>
          <div className="d-flex gap-2">
            <button onClick={()=>{this.props.handleState(product)}}
              className="btn btn-primary"
            >
              Xem chi tiết
            </button>
            <button className='btn btn-primary' onClick={()=>{this.props.handleThemGioHang(product)}}>Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}

// function outer(){
//     let a = 5 
//     return function inner(){
//         return a -= 1
//     }
// }

// test = outer()
// test()
