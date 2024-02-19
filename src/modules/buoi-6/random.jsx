import React, { useState, useCallback, memo } from "react";
// rfce

function MButton(props) {
  const { handleRandomImg } = props;
  return (
    <button onClick={handleRandomImg} className="btn btn-primary">
      Random
    </button>
  );
}

const Button = memo(MButton);

function Random() {
  const [srcImg, setSrcImg] = useState("https://i.pravatar.cc?img=2");
  const [count, setCount] = useState(0);

  // mounting: handleRandomImg -> 0x1212121212
  // updating: handleRandomImg -> 0x3232323232
  // updating: handleRandomImg -> 0x1323123123
  // updating: handleRandomImg -> 0x2131231241

  // useCallback: cache lại function, function không tạo lại mỗi khi re-render.
  const handleRandomImg = useCallback(() => {
    const num = Math.floor(Math.random() * 20) + 1;

    setSrcImg(`https://i.pravatar.cc?img=${num}`);
  }, []);

  //   const handleRandomImg = () => {
  //     const num = Math.floor(Math.random() * 20) + 1;

  //     setSrcImg(`https://i.pravatar.cc?img=${num}`);
  //   };

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <div className="card" style={{ width: "18rem" }}>
        <img src={srcImg} className="card-img-top" alt="..." />

        <div className="card-body">
          <button onClick={handleRandomImg} className="btn btn-primary">
            Random
          </button>
        </div>
      </div>
    </div>
  );
}

export default Random;
