import React from "react";

function TableProduct(props) {
  return (
    <div className="mt-2">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Brand</th>
            <th scope="col">Processor</th>
            <th scope="col">RAM</th>
            <th scope="col">Storage Capacity</th>
            <th scope="col">Screen Size</th>
            <th scope="col">Operating System</th>
            <th scope="col">Graphics Card</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index) => {
            return (
              // Gắn tạm thời, không nên dùng
              <tr key={index}>
                <th>{item.name}</th>
                <th>{item.brand}</th>
                <th>{item.processor}</th>
                <th>{item.ram}</th>
                <th>{item.screen}</th>
                <th>{item.os}</th>
                <th>{item.card}</th>
                <th>{item.storage}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableProduct;
