import { createSlice } from "@reduxjs/toolkit";

// redux + immer

const changeColorSlice = createSlice({
  name: "changeColorSlice",
  initialState: { color: "yellow" },
  reducers: {
    // switch case
    changeColor: (state, action) => {
      state.color = action.payload;
      // return ❌

      // -- Chú ý: Không được dùng return
      // -- Dùng như cách cũ: phải clone ra
      //   return {
      //     ...state,
      //     color: action.payload,
      //   };
    },
  },
});

export const changeColorReducer = changeColorSlice.reducer;

// action creator
export const { changeColor } = changeColorSlice.actions;
// action creator
// const changeColor = (payload) => {
//   return {
//     type: "changeColorSlice/changeColor",
//     payload,
//   };
// };
