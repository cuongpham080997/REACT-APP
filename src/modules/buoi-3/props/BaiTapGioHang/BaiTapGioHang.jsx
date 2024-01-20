import React, { Component } from "react";
import DanhSachSanPhamGioHang from "./DanhSachSanPhamGioHang";
import ModalGioHang from "./ModalGioHang";
const phoneData = [
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
export default class BaiTapGioHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gioHang: [],
    };
  }

  //? Lấy dữ liệu tại componentBaiTapGioHang
  themgioHang = (sanPhamChon) => {
    console.log(sanPhamChon);
    //* Bước 1: từ sản phẩm được chọn taọ ra sp giỏ hàng
    let spGioHang = {
      maSP: sanPhamChon.maSP,
      tenSP: sanPhamChon.tenSP,
      giaBan: sanPhamChon.giaBan,
      hinhAnh: sanPhamChon.hinhAnh,
      soLuong: 1,
    };
    //* Kiểm tra  spChon có trong giỏ hàng chưa?
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === spGioHang.maSP);

    if (index !== -1) {
      //*Sản phẩm được click đã có trong this.state.gioHang
      gioHangCapNhat[index].soLuong += 1;
    } else {
      //*Sản phẩm được click chưa có trong this.state.gioHang
      gioHangCapNhat.push(spGioHang);
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  //? Đặt sự kiện xoá giỏ hàng tại BaiTapGioHang
  xoaGioHang = (maSP) => {
    //*Tìm trong giỏ hàng có sản phẩm chứa maSP được click thì xoá nó đi
    //! Cách 1:
    // let gioHangCapNhat = [...this.state.gioHang]
    // let index = gioHangCapNhat.findIndex(sp => sp.maSP == maSP)
    // if(index !== -1){
    //     gioHangCapNhat.splice(index,1);
    // }

    //! Cách 2:
    let gioHangCapNhat = this.state.gioHang.filter((sp) => sp.maSP !== maSP);

    //? Cập nhật lại state giỏ hàng và render giaon diện
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  tangGiamSoLuong = (maSP, tangGiam) => {
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
    if (tangGiam) {
      gioHangCapNhat[index].soLuong += 1;
    }else{
        if(gioHangCapNhat[index].soLuong > 1){
            gioHangCapNhat[index].soLuong -= 1;
        }else{
            this.xoaGioHang(maSP)
        }
    }
    //*Cập nhật lại giá trị và render lại giỏ hàng
    this.setState({
        gioHang: gioHangCapNhat
    })
  };

  render() {
    let tongSoLuong = this.state.gioHang.reduce((tsl, spGH, index) => {
      return (tsl += spGH.soLuong);
    }, 0);
    return (
      <div className="container">
        <h3 className="text-center text-success">Bài tập giỏ hàng</h3>
        <ModalGioHang
          xoaGioHang={this.xoaGioHang}
          gioHang={this.state.gioHang}
          tangGiamSoLuong = {this.tangGiamSoLuong}
        />
        <div style={{ textAlign: "right" }}>
          <span
            data-bs-toggle="modal"
            data-bs-target="#modalId"
            className="text-danger"
            style={{ cursor: "pointer", fontSize: "17px", fontWeight: "bold" }}
          >
            Giỏ hàng({tongSoLuong})
          </span>
        </div>
        <DanhSachSanPhamGioHang
          themGioHang={this.themgioHang}
          mangSanPham={phoneData}
        />
      </div>
    );
  }
}
