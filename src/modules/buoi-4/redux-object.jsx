import React, { Component } from "react";
import ViewDetail from "../buoi-3/phone-shop/view-detail";
import { connect } from "react-redux";

const products = [
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
    hinhAnh: "./img/vsphone.jpg",
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

class ReduxObject extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Mã Sản Phẩm</th>
              <th>Tên Sản Phẩm</th>
              <th>Giá Bán</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => {
              return (
                <tr key={p.maSP}>
                  <td style={{ width: 200 }}>{p.maSP}</td>
                  <td style={{ width: 200 }}>{p.tenSP}</td>
                  <td style={{ width: 200 }}>{p.giaBan}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.props.dispatch({
                          type: "xemChiTiet",
                          payload: p,
                        });
                      }}
                      className="btn btn-success"
                    >
                      Xem Chi Tiết
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ViewDetail product={this.props.xemChiTiet} />
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    xemChiTiet: rootReducer.xemChiTietReducer.xemChiTiet,
  };
};

// 1. Gửi gián tiếp
// 2. Gửi trực tiếp
//! Chỉ Chọn 1 trong 2 cách hoặc gián tiếp hoặc trực tiếp
// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

export default connect(mapStateToProps)(ReduxObject);
