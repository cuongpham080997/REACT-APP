import { Component } from "react";
import CardPhone from "./card-phone";

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

export default class PhoneShop extends Component {
  constructor() {
    super();
    this.state = {
      product: products[2],
    };
  }

  renderProducts = () => {
    return products.map((product) => {
      return (
        <CardPhone
          key={product.maSP}
          data={product}
          handleState={(product) => {
            this.setState({ product });
          }}
        />
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h1>Phone Shop</h1>
        {/* Danh Sách Sản Phẩm */}
        <div className="d-flex flex-wrap gap-4">{this.renderProducts()}</div>

        {/* Thông Số Kĩ Thuật */}
        <hr />
        <div className="row">
          <div className="col-4">
            <h2 className="text-center">{this.state.product.tenSP}</h2>
            <img src={this.state.product.hinhAnh} style={{ width: "100%" }} />
          </div>

          <div className="col-8">
            <h2 className="text-center">Thông số kĩ thuật</h2>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td style={{ width: 200 }}>Màn hình</td>
                  <td>{this.state.product.manHinh}</td>
                </tr>
                <tr>
                  <td style={{ width: 200 }}>Hệ điều hành</td>
                  <td>{this.state.product.heDieuHanh}</td>
                </tr>
                <tr>
                  <td style={{ width: 200 }}>Camera Trước</td>
                  <td>{this.state.product.cameraTruoc}</td>
                </tr>
                <tr>
                  <td style={{ width: 200 }}>Camera Sau</td>
                  <td>{this.state.product.cameraSau}</td>
                </tr>

                <tr>
                  <td style={{ width: 200 }}>Ram</td>
                  <td>{this.state.product.ram}</td>
                </tr>
                <tr>
                  <td style={{ width: 200 }}>Rom</td>
                  <td>{this.state.product.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
