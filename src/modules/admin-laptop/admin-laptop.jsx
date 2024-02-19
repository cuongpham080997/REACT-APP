import React from "react";
import FormDangKy from "./components/form-dang-ky/form-dang-ky";
import TableProduct from "./components/table-product";

function AdminLaptop() {
  return (
    <div className="container">
        <FormDangKy />
        <TableProduct />
    </div>
  )
}

export default AdminLaptop