import React from "react";

/**
 * label: string
 * options: string[] - mảng các string
 */
function Select(props) {
  return (
    <div>
      <label className="form-label">{props.label}</label>
      <select
        value={props.value}
        onChange={props.onChange}
        className="form-select"
      >
        {props.options.map((op) => {
          return (
            <option key={op} value={op}>
              {op}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;
