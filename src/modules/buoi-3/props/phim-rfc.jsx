import React from "react";

//! Cách 1
// export default function PhimRFC(props) {
//   let phim = props.phim_input;
//   return (
//     <div className="card">
//       <img className="card-img-top" src={phim.hinhAnh} alt="Title" />
//       <div className="card-body">
//         <h4 className="card-title">{phim.tenPhim}</h4>
//         <p className="card-text">Text</p>
//       </div>
//     </div>
//   );
// }

//!Cách 2

export default function PhimRFC({phim_input,...rest}) {
    return (
      <div className="card">
        <img className="card-img-top" src={phim_input.hinhAnh} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{phim_input.tenPhim}</h4>
          <p className="card-text">Text</p>
        </div>
      </div>
    );
  }

