import { Component } from "react";
import CardPhone from "./card-phone";
import ViewDetail from "./view-detail";
import Cart from "./cart";
import Modal from "./modal";

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

/*
 * Muốn set lại state ở đâu thì phải gọi method setState tại component đó.
 */

export default class PhoneShop extends Component {
  constructor() {
    super();
    this.state = {
      product: products[0],
      gioHang: [],
      modal: {
        title: "",
        content: "",
        open: false,
        onClose: null,
        onOK: null,
      },
    };
  }

  handleThemGioHang = (pd) => {
    // this.setState({
    //   gioHang: this.state.gioHang.push(pd),
    // })

    console.log(this.state.gioHang);
    // Phải clone để khi setState react có thể nhận thấy hai giá trị khác nhau mà cập nhật lại giao diện.
    const newGioHang = [...this.state.gioHang]; // 0xzzz

    /**
     * Kiểm tra sản phẩm cần thêm vào có tồn tại trong giỏ hàng hay chưa?
     * - Tồn tại: tăng số lượng. tìm kiếm trong giỏ hàng rồi thay đổi giá trị thuộc tính soLuong.
     * - Chưa: số lượng = 1.
     */

    let pdExist = this.state.gioHang.find((sp) => {
      return sp.maSP === pd.maSP;
    });
    // pdExist === undefined: chưa tồn tại
    // pdExist !== undefined: tồn tại.
    if (pdExist) {
      // tồn tại: chỉ cập nhật lại số lượng sản phẩm.
      pdExist.soLuong += 1;
    } else {
      pdExist = { ...pd, soLuong: 1 };
      // Chưa tồn tại thì mới thêm mới vào giỏ hàng.
      newGioHang.push(pdExist);
    }

    this.setState({
      gioHang: newGioHang, // 0xzzz
    });
  };

  closeModal = () => {
    this.setState({
      modal: {
        open: false,
      },
    });
  };

  handleXoaSp = (pd) => {
    /**
     * filter, splice
     * filter: lập qua từng phần tử của mảng, và trả về một mảng mới chứa các phần tử thỏa mãn điều kiện.
     */

    this.setState({
      modal: {
        title: "Xóa Sản Phẩm",
        content: "Bạn có chắc chắn muốn xóa sản phẩm hay không?",
        open: true,
        onClose: this.closeModal,
        onOK: () => {
          const newGioHang = this.state.gioHang.filter((sp) => {
            return sp.maSP !== pd.maSP;
          });

          this.setState({
            gioHang: newGioHang,
          });

          this.closeModal();
        },
      },
    });

    handleThemGioHang = (pd) => {
      // Phải clone để khi setState react có thể nhận thấy hai giá trị khác nhau mà cập nhật lại giao diện.
      const newGioHang = [...this.state.gioHang]; // 0xzzz

      /**
       * Kiểm tra sản phẩm cần thêm vào có tồn tại trong giỏ hàng hay chưa?
       * - Tồn tại: tăng số lượng. tìm kiếm trong giỏ hàng rồi thay đổi giá trị thuộc tính soLuong.
       * - Chưa: số lượng = 1.
       */

      let pdExist = this.state.gioHang.find((sp) => {
        return sp.maSP === pd.maSP;
      });
      // pdExist === undefined: chưa tồn tại
      // pdExist !== undefined: tồn tại.
      if (pdExist) {
        // tồn tại: chỉ cập nhật lại số lượng sản phẩm.
        pdExist.soLuong += 1;
      } else {
        pdExist = { ...pd, soLuong: 1 };
        // Chưa tồn tại thì mới thêm mới vào giỏ hàng.
        newGioHang.push(pdExist);
      }

      this.setState({
        gioHang: newGioHang, // 0xzzz
      });
    };
  };

  handleTangSoLuong = (msp) => {
    /**
     * Tìm sản phẩm trong giỏ hàng.
     * Tăng số lượng của sản phẩm đó.
     */
    // b1: Tìm vị trí
    const index = this.state.gioHang.findIndex((p) => p.maSP === msp);

    // b2: Clone giỏ hàng để tạo giá trị mới.
    const newGioHang = [...this.state.gioHang];

    // b3: Lấy sản phẩm tại vị trí index để tăng giá trị thêm 1.
    const product = newGioHang[index];
    product.soLuong += 1;

    // b4: Cập nhật lại giỏ hàng.
    this.setState({
      gioHang: newGioHang,
    });
  };
  handleGiamSoLuong = (msp) => {
    // b1: Tìm vị trí
    const index = this.state.gioHang.findIndex((p) => p.maSP === msp);

    // b2: Clone giỏ hàng để tạo giá trị mới.
    const newGioHang = [...this.state.gioHang];

    // b3: Lấy sản phẩm tại vị trí index để tăng giá trị giảm 1.
    const product = newGioHang[index];
    // Nếu số lượng còn 1 thì xóa sản phẩm.
    // Ngược lại thì chỉ giảm 1.
    if (product.soLuong === 1) {
      // xoa san pham
      this.handleXoaSp(product);
    } else {
      product.soLuong -= 1;

      // b4: Cập nhật lại giỏ hàng.
      this.setState({
        gioHang: newGioHang,
      });
    }
  };

  renderProducts = () => {
    return products.map((product) => {
      return (
        <CardPhone
          key={product.maSP}
          data={product}
          handleState={(product) => {
            this.setState({ product });
          }}
          handleThemGioHang={this.handleThemGioHang}
        />
      );
    });
  };
  render() {
    return (
      <div className="container">
        {/* Sử dụng state để show Modal */}
        <Modal
          title={this.state.modal.title}
          content={this.state.modal.content}
          onClose={this.state.modal.onClose}
          onOK={this.state.modal.onOK}
          open={this.state.modal.open}
        />

        <Cart
          data={this.state.gioHang}
          handleXoaSp={this.handleXoaSp}
          handleTangSoLuong={this.handleTangSoLuong}
          handleGiamSoLuong={this.handleGiamSoLuong}
        />
        <h1>Phone Shop</h1>
        {/* Danh Sách Sản Phẩm */}
        <div className="d-flex flex-wrap gap-4">{this.renderProducts()}</div>

        {/* Thông Số Kĩ Thuật */}
        <hr />
        <ViewDetail product={this.state.product} />
      </div>
    );
  }
}
