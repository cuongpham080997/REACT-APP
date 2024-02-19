import React, { createContext, useState, useContext } from "react";

/**
 * Tương tự giống Redux.
 * -
 */
// Tạo context store (1)
const ContextStore = createContext();

// Bọc các component muốn sử dụng giá trị context store bởi Provider (3)
// Tạo Provider (2)
export function Provider(props) {
  // Provider Là nơi lưu trữ state của context.
  const [count, setCount] = useState(10);

  const value = [count, setCount];

  return (
    <ContextStore.Provider value={value}>
      {props.children}
    </ContextStore.Provider>
  );
}
// Tạo context store

// -------------------------
function UseContext() {
  const value = useContext(ContextStore);

  return (
    <div>
      A: {value[0]}
      <A />
    </div>
  );
}

function A() {
  const [, setC] = useContext(ContextStore);

  return (
    <div>
      <h2>A</h2>
      <button
        onClick={() => {
          // setC(10) trực tiếp
          //? setC(c + 1) nếu khai báo: const [c, setC] = useContext(ContextStore);

          // -----
          //* callBack function nếu khai báo: const [, setC] = useContext(ContextStore); 
          //* prev: là giá trị của state trước đó
          setC((prev) => {
            // return để xét lại giá trị
            return prev + 1;
          });
        }}
      >
        Tăng Count
      </button>
      <hr />
      <B />
    </div>
  );
}
function B() {
  // Store muốn lấy vào
  const value = useContext(ContextStore);

  return (
    <div>
      <h2>B</h2>
      <p>Count: {value[0]}</p>
    </div>
  );
}

export default UseContext;
