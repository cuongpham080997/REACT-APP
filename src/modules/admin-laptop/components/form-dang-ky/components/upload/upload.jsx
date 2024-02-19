import React, { useEffect, useRef, useState } from "react";
import CSS from "./upload.module.css";

function Upload({ title = "Click to Upload" }) {
  // const title = props.title ? props.title : 'Click to Upload'
  // const { title = 'Click to Upload' } = props;
  const inpRef = useRef();

  const [urlImages, setUrlImages] = useState([]);

  useEffect(() => {
    return () => {
      urlImages.forEach((i) => URL.revokeObjectURL(i));
    };
  }, [urlImages]);

  return (
    <div>
      <div>
        <button
          className={CSS.Upload}
          onClick={() => {
            inpRef.current.click();
          }}
        >
          {title}
        </button>

        <input
          onChange={(event) => {
            const newUrl = [];
            for (const file of event.target.files) {
              newUrl.push(URL.createObjectURL(file));
            }

            setUrlImages(newUrl);
          }}
          ref={inpRef}
          className="d-none"
          type="file"
          multiple
        />
      </div>

      <div>
        {urlImages.map((i) => {
          return (
            <img
              key={i}
              style={{
                width: 200,
                objectFit: "cover",
              }}
              src={i}
              alt="..."
            />
          );
        })}
      </div>
    </div>
  );
}

export default Upload;
