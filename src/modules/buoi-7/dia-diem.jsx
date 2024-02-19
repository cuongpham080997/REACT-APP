import React, { Fragment, useState } from "react";

const arrDiaDiem = [
  {
    id: 1,
    name: "Sài Gòn",
    arrQuanHuyen: [
      {
        id: 1,
        name: "Quận 1",
      },
      {
        id: 2,
        name: "Quận 2",
      },
      {
        id: 3,
        name: "Quận 3",
      },
    ],
  },
  {
    id: 2,
    name: "Đà Nẵng",
    arrQuanHuyen: [
      {
        id: 1,
        name: "Quận Cẩm Lệ",
      },
      {
        id: 2,
        name: "Quận Thanh Khê",
      },
      {
        id: 3,
        name: "Quận Hải Châu",
      },
    ],
  },
];

function DiaDiem() {
  const [thanhPhoId, setThanhPhoId] = useState(arrDiaDiem[0].id);

  const renderThanhPho = () => {
    return arrDiaDiem.map((i) => {
      return (
        <Fragment key={i.id}>
          <option value={i.id}>{i.name}</option>
        </Fragment>
      );
    });
  };

  const renderQuanHuyen = () => {
    console.log({ thanhPhoId });
    const thanhPho = arrDiaDiem.find((i) => i.id === thanhPhoId);
    console.log(thanhPho);
    return thanhPho.arrQuanHuyen.map((i) => {
      return (
        <Fragment key={i.id}>
          <option>{i.name}</option>
        </Fragment>
      );
    });
  };

  return (
    <div className="container">
      <div>
        <div className="mb-3">
          <label htmlFor="thanhPho" className="form-label">
            Thành Phố
          </label>
          <select
            id="thanhPho"
            className="form-select"
            aria-label="Default select example"
            onChange={(event) => {
              setThanhPhoId(Number(event.target.value));
            }}
          >
            {/* render các thành phố dựa vào arrDiaDiem */}
            {renderThanhPho()}
          </select>
        </div>
        <div>
          <label htmlFor="tinh" className="form-label">
            Quận/Huyện
          </label>
          <select
            id="tinh"
            className="form-select"
            aria-label="Default select example"
          >
            {/* Render quận huyện dựa vào id Thanh phố + arrDiaDiem */}
            {renderQuanHuyen()}
          </select>
        </div>
      </div>
    </div>
  );
}

export default DiaDiem;
