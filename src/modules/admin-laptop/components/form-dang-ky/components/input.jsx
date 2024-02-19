import React from "react";

/**
 * label
 */
function Input(props) {
  return (
    <div>
      <label className="form-label">{props.label}</label>
      <input
        value={props.value}
        onChange={props.onChange}
        className="form-control"
      />
    </div>
  );
}

export default Input;
