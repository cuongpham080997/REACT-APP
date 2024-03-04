import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../../redux/change-color.slice";
console.log('111',changeColor)
function ChangeColorBuoi9() {
    const dispatch = useDispatch()
    const bgc = useSelector((rootReducer)=>rootReducer.changeColorReducer.color)
  return (
    <div>
    <div
      style={{
        width: 200,
        height: 200,
        backgroundColor: bgc,
      }}
      
    />

    <button
      onClick={() => {
        dispatch(changeColor("green"));
      }}
    >
      green
    </button>
    <button
      onClick={() => {
        dispatch(changeColor("blue"));
      }}
    >
      blue
    </button>
    <button
      onClick={() => {
        dispatch(changeColor("yellow"));
      }}
    >
      yellow
    </button>
  </div>
  );
}

export default ChangeColorBuoi9;
