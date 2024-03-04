import React, { useState, useMemo, useRef } from "react";
import { useReducer } from "react";
import { useCallback } from "react";

/**
 * Output: lấy dữ liệu từ 'form'(radio,checkbox,...)
 * Input: Xét lại giá trị của 'form'(radio,checkbox,...)
 * two way binding
 */

//Demo useCallback hoạt động ntn. Khác với useEffect không có kết quả trả về từ return,useCallback có kết quả trả về từ return
const _useCallback = (fn, deps) => {
  return fn;
};

const _useMemo = (fn, desp) => {
  return fn();
};

function fibonacci(n, memo = {}) {
  if (n <= 1) {
    return n;
  }

  if (memo[n]) {
    return memo[n];
  }

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

  return memo[n];
}

//Khác với sự kiện onchange của javascript(nhập vào input rồi click chuột ra ngoài thì mới kích hoạt sự kiện onchange)

function Input() {
  const [name, setName] = useState("Cyber Soft");

  //  Lưu lại, không khởi tạo mới
  const name2 = useRef("");

  // 1. [Cyber Soft] 0x1111
  // 2. [Cyber Softa] 0x2222
  // 2. [Cyber Softab] 0x3333
  const handleGetName = useCallback(() => {
    console.log("[name]", name);
  }, [name]);

  //* useMemo thường được dùng khi xử lý render tính toán nặng(thường là các web về đồ hoạ)
  const result = useMemo(() => {
    console.log("hihi");
    return fibonacci(50);
  }, [name]);

  return (
    <div>
      <p>Fibonacci - 1000: {result}</p>

      <div
        style={{
          padding: 10,
          display: "flex",
          gap: 5,
        }}
      >
        <input
          placeholder="name"
          value={name}
          // Khác với onchange của javascript
          onChange={(event) => {
            console.log("value:::", event.target.value);
            setName(event.target.value);
          }}
        />

        <button onClick={handleGetName}>Get Name</button>
      </div>

      <div
        style={{
          padding: 10,
          display: "flex",
          gap: 5,
        }}
      >
        <input
          placeholder="name 2"
          onChange={(e) => {
            name2.current = e.target.value;
          }}
        />

        <button
          onClick={() => {
            console.log("[name2]", name2.current);
          }}
        >
          Get Name 2
        </button>
      </div>
    </div>
  );
}

export default Input;
//Khi nào dùng useRef và useState?
// useRef chỉ có chiều đi ra(output) không có chiều đi vào(input) như useState

