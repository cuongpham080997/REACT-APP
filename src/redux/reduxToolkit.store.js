import { configureStore } from "@reduxjs/toolkit";
import { fontSizeReducer } from "./font-size.slice";
import { changeColorReducer } from "./change-color.slice";
//> 1. Tạo store. (làm 1 lần duy nhất)
//> 2. Import store vào props store của component Provider. (làm 1 lần duy nhất)

//> 3. Tạo các reducer. (làm nhiều lần)
export const store = configureStore({
  reducer: {
    fontSizeReducer,
    changeColorReducer,
  },
});
