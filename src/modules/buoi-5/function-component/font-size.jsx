import React, { useState } from "react";
// rfc

export default function FontSizeFC() {
  // Cách tạo state
  // Trả 1 array có 2 phần tử:
  // 1 là state của mình
  // 2 là hàm set lại state.

  // Quy ước: [tenState, setTenState] ✅
  const [state, setState] = useState({
    fz: 20,
    bgc: "black",
  });
  // atomic state(chia nhỏ state,giải quyết vấn đề phải rải state bằng spread operator)
  const [fontSize, setFontSize] = useState(16);
  const [bgc, setBgc] = useState("black");

  /**
   * state = {
   *    bgc: "black"
   * }
   *
   *
   * state = {
   *     fz: 17
   * }
   *
   * state = 10
   */

  // rs[0].fz += 1; ❌

  return (
    <div>
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: state.bgc,
        }}
      />

      <div className="my-2">
        <button
          onClick={() => {
            setState({
              ...state,
              bgc: "black",
            });
          }}
          className="btn btn-dark mx-2"
        >
          Black
        </button>
        <button
          onClick={() => {
            setState({
              ...state,
              bgc: "yellow",
            });
          }}
          className="btn btn-warning mx-2"
        >
          Yellow
        </button>
        <button
          onClick={() => {
            setState({
              ...state,
              bgc: "blue",
            });
          }}
          className="btn btn-primary mx-2"
        >
          Blue
        </button>
        <button
          onClick={() => {
            setState({
              ...state,
              bgc: "green",
            });
          }}
          className="btn btn-success mx-2"
        >
          Green
        </button>
      </div>
      <p
        style={{
          fontSize: fontSize,
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
        saepe?
      </p>
      <button
        onClick={() => {
          setFontSize(fontSize + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setFontSize(fontSize - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
