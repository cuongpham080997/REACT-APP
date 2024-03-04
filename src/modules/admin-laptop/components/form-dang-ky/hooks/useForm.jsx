import { useState } from "react";
import { Validator } from "../utils/validator";
import { produce } from "immer";

export const useForm = ({handleSubmit}) => {
  const [values, setValues] = useState({
    name: "",
    brand: "",
    processor: "",
    ram: "",
    screen: "",
    os: "",
    card: "",
    storage: "",
  });

  const [touches, setTouches] = useState({
    name: false,
    brand: false,
    processor: false,
    ram: false,
    screen: false,
    os: false,
    card: false,
    storage: false,
  });
  console.log({ touches });
  const [errors, setErrors] = useState({
    name: "",
    brand: "",
    processor: "",
    ram: "",
    screen: "",
    os: "",
    card: "",
    storage: "",
  });

  const handleChangeValue = (e) => {
    const n = e.target.name;

    const newValues = produce(values, (draft) => {
      draft[n] = e.target.value;
    });

    setValues(newValues);
  };
  const handleBlur = (e) => {
    const name = e.target.name;

    const newTouches = produce(touches, (draft) => {
      draft[name] = true;
    });

    setTouches(newTouches);

    handleValidate(name);
  };
  const handleValidate = (field) => {
    let newErrs = {};
    const value = values[field];
    switch (field) {
      case "brand":
      case "storage":
      case "processor":
      case "card":
      case "os":
        newErrs[field] = new Validator(value).require().getMessage();
        break;
      case "name":
        newErrs[field] = new Validator(value)
          .require()
          .string()
          .min(2)
          .getMessage();
        break;
      case "ram":
        newErrs[field] = new Validator(value)
          .require()
          .number()
          .min(4)
          .getMessage();
        break;
      case "screen":
        newErrs[field] = new Validator(value)
          .require()
          .number()
          .min(10)
          .getMessage();
        break;
      default:
    }

    // setErrors({
    //   ...errors,
    //   ...newErrs,
    // });

    setErrors((p) => ({ ...p, ...newErrs }));
  };

  const getFieldProps = (name) => {
    return {
      name,
      value: values[name],
      error: touches[name] && errors[name],
      onChange: handleChangeValue,
      onBlur: handleBlur,
    };
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Submit ngay lập tức:

    // kiểm tra từng đi qua tất cả các field hay chưa. chưa -> stop -> những field chưa đi qua thì chúng ta sẽ gọi hàm handleValidate()
    const allTouches = Object.entries(touches).every(([, value]) => value);
    if (!allTouches) {
      Object.entries(touches).forEach((resp) => {
        const [field, value] = resp;
        console.log({ resp, field, touches });

        if (!value) {
          handleValidate(field);

          // ** Không dùng: setState bên trong for
          // Chỉ update cái field cuối cùng
          // setTouches({
          //   ...touches,
          //   [field]: true,
          // });

          // setTouches((p) => ({
          //   ...p,
          //   [field]: true,
          // }));
        }
      });

      // Chỉ muốn lấy tất cả key của touches chuyển về giá trị "true"
      // Sau khi tính toán xử lý xong trả về chỉ duy nhất 1 giá.
      const newTouches = Object.keys(touches).reduce((prev, field) => {
        return {
          ...prev,
          [field]: true,
        };
      }, {});

      setTouches((p) => ({
        ...p,
        ...newTouches,
      }));

      return;
    }
    // kiểm tra còn 1 message lỗi nào hay không. còn -> stop

    // is = true: không còn lỗi
    // is = false: còn lỗi
    const is = Object.entries(errors).every(([, value]) => value === "");
    if (!is) {
      return;
    }

    // Dừng
    handleSubmit(values);

    // reset form
    setValues({
      name: "",
      brand: "",
      processor: "",
      ram: "",
      screen: "",
      os: "",
      card: "",
      storage: "",
    });

    setTouches({
      name: false,
      brand: false,
      processor: false,
      ram: false,
      screen: false,
      os: false,
      card: false,
      storage: false,
    });
  };

  // [dữ liệu, hàm xử lý]
  return [
    { touches, errors },
    { getFieldProps, onSubmit },
  ];
};
