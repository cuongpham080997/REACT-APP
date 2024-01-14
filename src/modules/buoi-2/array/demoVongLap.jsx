import React, { Component } from "react";

export default class DemoVongLap extends Component {
  constructor() {
    super();
    this.state = {
      mangSanPham: [
        { maSP: 1, tenSP: "Iphone x", gia: 1000 },
        { maSP: 2, tenSP: "SamSung", gia: 2000 },
        { maSP: 3, tenSP: "Huawei", gia: 3000 },
      ],
    };
  }

  //Viết phương thức render các sản phẩm thành các tag tr
  renderSanPham = () => {
    let contentTable = [];
    //* Cách 1
    // for (let item of this.state.mangSanPham) {
    //   contentTable.push(
    //   <tr key={item.maSP}>
    //       <td>${item.maSP}</td>
    //       <td>${item.tenSP}</td>
    //       <td>${item.gia}</td>
    //   </tr>
    //   )
    // }

    //* Cách 2
    contentTable = this.state.mangSanPham.map((item, index) => {
      return (
        <tr key={index}>
          <td>${item.maSP}</td>
          <td>${item.tenSP}</td>
          <td>${item.gia}</td>
        </tr>
      );
    });

    return contentTable;
  };

  render() {
    return (
      <div className="container">
        <h3 className="bg-dark p-5 text-center text-white">
          Demo vòng lặp React
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Giá sản phẩm</th>
            </tr>
          </thead>
          <tbody>{this.renderSanPham()}</tbody>
        </table>
      </div>
    );
  }
}
