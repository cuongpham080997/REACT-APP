import { combineReducers, createStore } from "redux";

/**
 * Nơi nhận tất cả các hành động gửi đến redux để xử lý cập nhật lại state.
 */

// Tạo State Count ở redux:
// Đặt sử lý logic ở tại redux: reducer(state)

const STATE_XCT = {
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
};

/**
 * @Note:
 * Mỗi khi gửi tính hiệu thì sẽ chạy toàn bộ reducer.
 * Khi gửi type thì không được trùng tên nhau.
 */
const rootReducer = combineReducers({
  // Hàm xử lý khi muốn cập nhật lại state count
  // Tạo state count: 10
  countReducer: (state = { count: 23 }, action) => {
    console.log("countReducer", action);

    if (action.type === "tangCount") {
      // cập nhật lại state mới
      const newCount = state.count + 1;

      // Phải có dòng return để cập nhật lại state.
      return {
        count: newCount,
      };
    }

    return state;
  },

  tangGiamReducer: (state = { fz: 16 }, action) => {
    console.log("tangGiamReducer", action);
    // if (action.type === "tangFontSize") {
    //   return {
    //     fz: state.fz + 1,
    //   };
    // }

    // if (action.type === "giamFontSize") {
    //   return {
    //     fz: state.fz - 1,
    //   };
    // }

    switch (action.type) {
      case "tangFontSize": {
        return {
          fz: state.fz + 1,
        };
      }
      case "giamFontSize": {
        return {
          fz: state.fz - 1,
        };
      }
      default: {
        return state;
      }
    }
  },
  xemChiTietReducer: (state = { xemChiTiet: STATE_XCT }, action) => {
    console.log("xemChiTietReducer", action);
    switch (action.type) {
      case "xemChiTiet": {
        state.xemChiTiet = action.payload;

        console.log("state", state);
        // ??? Vì sao
        // Nếu cùng giá trị thì sẽ không re-render lại
        return { ...state }; // object
        // return [...state] // array
      }
      default: {
        return state;
      }
    }
  },
  // homeReducer.
  // gioHangReducer.
});

/**
 * Tạo store redux.
 */
const rootStore = createStore(
  rootReducer,
  //   Kết nối với redux devtool

  //! Cách 1: ý nghĩa câu lệnh dưới là kiểm tra đã cài redux hay chưa && khởi chạy redux
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //! Cách 2: dùng cú pháp optional chaining
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);

export { rootStore };
