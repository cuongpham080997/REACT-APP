import React, { Component } from "react";
import SanPham from "./san-pham";
// import dataPhone from "../../../../../public/dataPhone.json";
const dataPhone = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "/img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];
export default class DanhSachSanPham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sanPhamChiTiet: dataPhone[0],
    };
  }
  renderSanPham = () => {
    return dataPhone.map((dt, i) => {
      return <SanPham key={i} dt={dt} xemChiTiet={this.xemChiTiet} />;
    });
  };

  //   Xử lý nút xem chi tiết
  xemChiTiet = (sanPham) => {
    this.setState({
      sanPhamChiTiet: sanPham,
    });
  };
  render() {
    let { sanPhamChiTiet } = this.state;
    return (
      <div className="container">
        <div className="row">{this.renderSanPham()}</div>
        <hr />
        <div className="row">
          <div className="col-6 text-center">
            <h3>{sanPhamChiTiet.tenSP} </h3>
            <img src={sanPhamChiTiet.hinhAnh} alt="" width={250} height={300} />
          </div>
          <div className="col-6 mt-5">
            <table className="table table-stri">
              <tbody>
                <tr>
                  <th>Màn hình</th>
                  <th> {sanPhamChiTiet.manHinh} </th>
                </tr>
                <tr>
                  <th>Hệ Điều Hành</th>
                  <th> {sanPhamChiTiet.heDieuHanh} </th>
                </tr>
                <tr>
                  <th>Camera trước</th>
                  <th> {sanPhamChiTiet.cameraTruoc} </th>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <th> {sanPhamChiTiet.cameraSau} </th>
                </tr>
                <tr>
                  <th>Ram</th>
                  <th> {sanPhamChiTiet.ram} </th>
                </tr>
                <tr>
                  <th>Rom</th>
                  <th> {sanPhamChiTiet.rom} </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
