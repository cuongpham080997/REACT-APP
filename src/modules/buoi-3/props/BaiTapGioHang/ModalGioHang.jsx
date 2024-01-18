import React, { Component } from "react";
import SanPham from "../BaiTapTruyenFunc/san-pham";

export default class ModalGioHang extends Component {
  render() {
    const { gioHang, xoaGioHang, tangGiamSoLuong } = this.props;
    return (
      <div>
        <div
          className="modal fade"
          id="modalId"
          tabIndex={-1}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
            role="document"
          >
            <div
              className="modal-content"
              style={{
                maxWidth: "800px",
                width: "800px",
                transform: "translateX(300px)",
              }}
            >
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">
                  Giỏ hàng
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <td>Mã SP</td>
                      <td>Hình ảnh</td>
                      <td>Tên SP</td>
                      <td>Số lượng</td>
                      <td>Đơn giá</td>
                      <td>Thành tiền</td>
                    </tr>
                  </thead>
                  <tbody>
                    {gioHang.map((spGH, index) => {
                      return (
                        <tr key={index}>
                          <td>{spGH.maSP}</td>
                          <td>
                            <img
                              src={spGH.hinhAnh}
                              width={50}
                              height={75}
                              alt=""
                            />
                          </td>
                          <td>{spGH.tenSP}</td>
                          <td>
                            <button
                              className="btn btn-primary"
                              onClick={() => {
                                tangGiamSoLuong(spGH.maSP, true);
                              }}
                            >
                              +
                            </button>
                            {spGH.soLuong}
                            <button
                              className="btn btn-primary"
                              onClick={() => {
                                tangGiamSoLuong(spGH.maSP, false);
                              }}
                            >
                              -
                            </button>
                          </td>
                          <td>{spGH.giaBan.toLocaleString()}</td>
                          <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                          <td>
                            <button
                              onClick={() => xoaGioHang(spGH.maSP)}
                              className="btn btn-danger"
                            >
                              Xoá
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                      <tr>
                        <td colSpan={5}></td>
                        <td>Tổng tiền</td>
                        <td>
                          {this.props.gioHang.reduce((tongTien,spGioHang,index)=>{
                            return tongTien += spGioHang.soLuong * spGioHang.giaBan
                          },0).toLocaleString()}
                        </td>
                      </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
