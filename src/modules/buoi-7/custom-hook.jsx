/**
 * custom hook:
 * - function
 * - có sử dụng các hook bên trong.
 */

import { useState } from "react";

/**
 * Lý do:
 * - Tái sử dụng.
 * - Chia tách logic.
 */
// -- Logic --
export const useCounter = () => {
  const [count, setCount] = useState(0);

  const handleTang1 = () => {
    setCount((c) => c + 1);
  };

  const handleTang5 = () => {
    setCount((p) => p + 5);
  };

  const handleTang10 = () => {
    setCount(count + 10);
  };

  return [{ count }, { handleTang1, handleTang5, handleTang10 }];
};

// -- UI --
export function Counter() {
  const [{ count }, { handleTang1, handleTang5, handleTang10 }] = useCounter();

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleTang1}>Tăng 1</button>
      <button onClick={handleTang5}>Tăng 5</button>
      <button onClick={handleTang10}>Tăng 10</button>
    </>
  );
}
