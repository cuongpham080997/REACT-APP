import React, { useState } from "react";

function Toggle(props) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle
      </button>

      {show ? props.children : null}
    </div>
  );
}

export default Toggle;
