import React, { useState } from "react";
import Input from "./components/input";
import Select from "./components/select";
import S from "./form-dang-ky.module.css";
import Upload from "./components/upload/upload";
import Toggle from "../../../../components/toggle";

function FormDangKy() {
  const [values, setValues] = useState({
    name: "",
    brand: "",
  });

  return (
    <div className={`row ${S["form-dang-ky"]}`}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="col-8"
      >
        <div className="row">
          <div className="col-6">
            <Input
              onChange={(e) => {
                // const newValues = produce(values, (draft) => {
                //   draft.name = e.target.value;
                // });
                // setValues(newValues);
              }}
              label={"Product Name"}
            />
          </div>
          <div className="col-6">
            <Select
              label={"Brand"}
              options={["Asus", "Apple", "HP", "Lenovo"]}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Select label={"Processor"} options={["AMD", "Apple", "Intel"]} />
          </div>
          <div className="col-4">
            <Input label={"RAM"} />
          </div>
          <div className="col-4">
            <Select
              label={"Storage Capacity"}
              options={["256GB", "512GB", "1TB", "2TB"]}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Input label={"Screen Size"} />
          </div>
          <div className="col-4">
            <Select
              label={"Operating System"}
              options={["Windows", "MacOS", "Linux"]}
            />
          </div>
          <div className="col-4">
            <Select label={"Graphics Card"} options={["NVIDIA", "AMD"]} />
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
