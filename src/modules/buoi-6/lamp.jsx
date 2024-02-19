import React, { useState } from "react";
import IconLamp from "../../icons/lampIcon";

export default function Lamp() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div>
        <div
          style={{
            color: isOpen ? "blue" : "red",
          }}
        >
          {/* <img src="/icons/lamp.svg" /> */}

          {/* js + css Cách này không tối ưu vì cả js lẫn css re-render */}
          {/* <IconLamp color={isOpen ? "blue" : "red"} /> */}
  
          {/* css Cách này tối ưu hơn do chỉ css re-render */}
          <IconLamp />
        </div>
        <hr />
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Bật
        </button>
        <button
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Tắt
        </button>
      </div>
    );
  }
  
