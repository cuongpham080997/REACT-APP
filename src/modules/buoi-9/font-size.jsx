import React from "react";
// Hook để lấy state từ store redux về.
// Hook để gửi action lên reducer.
import { useDispatch, useSelector } from "react-redux";
import { giam, tang } from "../../redux/font-size.slice";

function FontSizeBuoi9() {
  // Lấy giá trị state từ trên redux về function component
  const fontSize = useSelector((rootReducer) => {
    return rootReducer.fontSizeReducer;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <p
        style={{
          fontSize: fontSize,
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cumque
        quis est fuga inventore alias consectetur incidunt blanditiis natus
        possimus.
      </p>

      <button
        onClick={() => {
          dispatch(tang());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(giam());
        }}
      >
        -
      </button>
    </div>
  );
}

export default FontSizeBuoi9;
