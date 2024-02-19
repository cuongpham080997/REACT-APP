import React, { useEffect, useState } from "react";

/**
 * useEffect: là một hook can thiệp vào các giai đoạn vòng đời của component
 * 1. mounting:
 * 2. updating:
 * 3. un-mounting: ()
 * - useEffect: thứ tự chạy: chạy sau khi giao diện được render xong.
 *
 * - Cách sử dụng:
 * 1. 2 tham số
 * 2. Tham số thứ nhất là function.
 * 3. Tham số thứ hai là dependencies
 *
 * - Dependencies:
 * 1. Không có = undefined.
 * 2. []
 * 3. [count, isOpen]
 */

function UseEffect() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [like, setLike] = useState(0);
  // TH1: mounting + updating
  // mức độ sử dụng: 0.000001%
  useEffect(() => {
    console.log("[TH1:useEffect]");

    // bất cẩn: setState bên trong này. Chạy vô tận
    // setCount(count + 1); // ???
  });

  // TH2: mounting. chỉ chạy 1 lần khi được mount lên trên giao diện
  // mức độ sử dụng: 99,99%
  // tình huống: call api, ...
  useEffect(() => {
    console.log("[TH2:useEffect]");
  }, []);

  // TH3: mounting + updating ( khi 1 giá trị phần tử trong dependencies thay đổi ) thì sẽ chạy là callback function
  // mức độ sử dụng: 99,99%
  // tình huống: muốn gọi lại cb function khi giá trị state nào đó có thay đổi
  useEffect(() => {
    console.log("[TH3:useEffect]");
  }, [like, count2]);

  // theo dõi biến count, khi giá trị count cập nhật thì mới log ra màn hình.
  useEffect(() => {
    console.log("count:::", count);
  }, [count]);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
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

export default UseEffect;
