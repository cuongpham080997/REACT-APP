import { produce } from "immer";
import React, { useEffect, useState } from "react";
import Input from "./components/input";
import Select from "./components/select";
import Upload from "./components/upload/upload";
import S from "./form-dang-ky.module.css";
import { useForm } from "./hooks/useForm";


/**
 * Chú ý:
 * - React chỉ cập nhật state mà các bạn muốn thay đổi cuối cùng.
 */
// Tách logic

function FormDangKy(props) {
  const [, { onSubmit, getFieldProps }] = useForm({
    handleSubmit: props.handleSubmit,
  });

  return (
    <div className={`row ${S["form-dang-ky"]}`}>
      <form onSubmit={onSubmit} className="col-8">
        <div className="row">
          <div className="col-6">
            <Input
              // onChange={handleChangeValue}
              // name="name"
              // value={values.name}
              {...getFieldProps("name")}
              // error={touches.name && errors.name}
              label={"Product Name"}
            />
          </div>
          <div className="col-6">
            <Select
              label={"Brand"}
              options={["Asus", "Apple", "HP", "Lenovo"]}
              defaultOption="Select Brand"
              {...getFieldProps("brand")}
              // onChange={handleChangeValue}
              // name="brand"
              // value={values.brand}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Select
              {...getFieldProps("processor")}
              label={"Processor"}
              options={["AMD", "Apple", "Intel"]}
              defaultOption="Select Processor"
            />
          </div>
          <div className="col-4">
            <Input {...getFieldProps("ram")} label={"RAM"} />
          </div>
          <div className="col-4">
            <Select
              {...getFieldProps("storage")}
              label={"Storage Capacity"}
              defaultOption="Select Storage Capacity"
              options={["256GB", "512GB", "1TB", "2TB"]}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Input {...getFieldProps("screen")} label={"Screen Size"} />
          </div>
          <div className="col-4">
            <Select
              {...getFieldProps("os")}
              label={"Operating System"}
              defaultOption="Select Operating System"
              options={["Windows", "MacOS", "Linux"]}
            />
          </div>
          <div className="col-4">
            <Select
              {...getFieldProps("card")}
              label={"Graphics Card"}
              options={["NVIDIA", "AMD"]}
              defaultOption="Select Graphics Card"
            />
          </div>
        </div>

        <div>
          <button className="btn btn-primary mt-2">Save</button>
        </div>
      </form>

      <div className="col-4">
        <Upload title="Upload" />
      </div>
    </div>
  );
}

export default FormDangKy;
