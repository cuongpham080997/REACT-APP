import React, { useEffect, useState } from "react";

/**
 * Mount
 * Un-mount
 * Mount
 *
 * [DEV]
 * StrictMode làm useEffect: chạy 2 lần.
 * [PROD]
 * StrictMode: bỏ đi
 */

/**
 * TH1:
 * - Tăng biến count
 */

/**
 * clean up function sẽ chạy trước khi component chúng ta cập nhật lại - trước khi component re-render
 * - chạy trước khi component bị xóa khỏi giao diện
 */

function CleanUp2() {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(0);

  useEffect(() => {
    // count: 2
    // like: 0

    console.log("-----------------------------------");
    console.log("[useEffect] count", count); // 0 , 1 , 2
    console.log("[useEffect] like", like); // 0 , 0 , 0
    console.log("-----------------------------------");

    return () => {
      // count: 2
      // like: 0
      console.log("-----------------------------------");
      console.log("[clean-up] count", count); // 0 1
      console.log("[clean-up] like", like); // 0 0
      console.log("-----------------------------------");
    };
  }, [count]);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1); // count + 1 // -> 1 -> 2
        }}
      >
        Count: {count}
      </button>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        Like: {like}
      </button>
    </div>
  );
}

export default CleanUp2;
