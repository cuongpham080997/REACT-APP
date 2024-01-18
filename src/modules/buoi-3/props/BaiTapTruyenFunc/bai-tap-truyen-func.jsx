import React, { Component } from "react";
import DanhSachSanPham from "./list-sp";
export default class BaiTapTruyenFunction extends Component {
  render() {
    return (
      <div>
        <h3 className="text-center  text-success">Bài tập truyền component</h3>
        <DanhSachSanPham />
      </div>
    );
  }
}