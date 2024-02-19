import React, { useEffect, useState } from "react";

function CleanUp() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  //! Cách 1: Khi dùng addEvenListener mỗi lần di chuyển chuột là mỗi lần lắng nghe 1 sự kiện mousemove,cứ thế cộng dồn lên dấn đến sẽ xảy ra lag 
  //   window.addEventListener("mousemove", (event) => {
  //     setPosition({
  //       x: event.x,
  //       y: event.y,
  //     });
  //   });

  //! Cách 2: dùng onmousemove thì mỗi lần di chuyển chuột sẽ ghi đè sự kiện mousemove lên sự kiện mousemove trước đó, dẫn đến mỗi lần di chuột chỉ có 1 sự kiện mousemove bị ghi đè nên sẽ không xảy ra lag
  //   window.onmousemove = (event) => {
  //     setPosition({
  //       x: event.x,
  //       y: event.y,
  //     });
  //   };

  //!Cách 3: Dùng useEffect vs dependencies [] đê window lắng nghe sự kiện mousemove 1 lần duy nhất dẫn đến không xảy ra lag
  useEffect(() => {
    // Chỉ chạy 1 lần duy nhất
    const handleMouseMove = (event) => {
      console.log("111111111111111");

      setPosition({
        x: event.x,
        y: event.y,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const cleanUp = () => {
      // Hàm cleanUp sẽ chạy trước khi component un-mount: (xóa khỏi dom)

      window.removeEventListener("mousemove", handleMouseMove);
    };
    return cleanUp;
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        transform: "translate(-50%,-50%)",

        width: 40,
        height: 40,
        backgroundColor: "pink",
        borderRadius: "50%",
        zIndex: -1,
      }}
    ></div>
  );
}

export default CleanUp;
