import React from "react";
import { Error } from "./error";

/**
 * label
 * value
 * onChange
 * name
 * error
 */
function Input(props) {
  // inputProps: lấy những thuộc tính còn lại của props.
  const { label, error, ...inputProps} = props;

  const obj = {
    a: 10,
    b: 20,
    c: 30,
  };
  const { c, ...rest } = obj;
  /**
   * rest: {
   *    a: 10,
   *    b: 20,
   * }
   */

  return (
    <div>
      <label className="form-label">{label}</label>
      <input
        // value={props.value}
        // onChange={props.onChange}
        // onBlur={props.onBlur}
        // name={props.name}
        {...inputProps}
        
        // // eslint-disable-next-line react/no-unknown-property
        // a={obj.a}
        // // eslint-disable-next-line react/no-unknown-property
        // b={obj.b}
        // {...rest}
        className="form-control"
      />
      <Error error={error} />
    </div>
  );
}

export default Input;
