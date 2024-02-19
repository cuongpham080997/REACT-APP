import { createSlice } from "@reduxjs/toolkit";

const fontSizeSlice = createSlice({
  initialState: 16,
  name: "fontSizeSlice",
  // switch case
  reducers: {
    tang: (state) => {
      return state + 1;
    },
    giam: (state) => {
      return state - 1;
    },
  },
});

// Lấy reducer -> phải là function
export const fontSizeReducer = fontSizeSlice.reducer;

export const { giam, tang } = fontSizeSlice.actions;


function _createSlice({ initialState }) {
  const reducer = (state = initialState, action) => {};

  return {
    reducer,
  };
}


// strategy pattern
// switch -> object
// const type = "tang";
// const tang = () => {};
// const giam = () => {};

// switch (type) {
//   case "tang":
//     tang();
//     break;
//   case "giam":
//     giam();
//     break;
//   default:
//     break;
// }
// // ----
// const reducers = {
//   tang: tang,
//   giam: giam,
// };
// // 1 dòng duy nhất
// reducers[type]();
