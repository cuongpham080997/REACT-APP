import React, { useState } from "react";
import FormDangKy from "./components/form-dang-ky/form-dang-ky";
import TableProduct from "./components/table-product";

function AdminLaptop() {
  const [laptops, setLaptops] = useState([]);

  const handleSubmit = (newLaptop) => {
    setLaptops([newLaptop, ...laptops]);
  };

  return (
    <div className="container mt-4">
      <FormDangKy handleSubmit={handleSubmit} />

      <TableProduct data={laptops} />
    </div>
  );
}

export default AdminLaptop;
