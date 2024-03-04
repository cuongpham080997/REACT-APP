import React from "react";
import { Error } from "./error";

/**
 * label: string
 * options: string[] - mảng các string
 * value: string
 * onChange: function
 * name
 */
function Select(props) {
  const { label, options, error, defaultOption, ...selectProps } = props;
  return (
    <div>
      <label className="form-label">{props.label}</label>
      <select
        // value={props.value}
        // onChange={props.onChange}
        // name={props.name}
        // onBlur={props.onBlur}
        {...selectProps}
        className="form-select"
      >
        {[defaultOption, ...options].map((op,index) => {
          return (
            <option key={index} value={op}>
              {op}
            </option>
          );
        })}
      </select>
      <Error error={props.error} />
    </div>
  );
}

export default Select;
