/* eslint-disable no-control-regex */
/**
 * rules:
 * - number
 * - string
 * - email
 * - min
 * - max
 * - require
 */

/**
 * @param {string} value giá trị người dùng nhập vào.
 */
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   static init = (name) => {
//     return new Animal(name);
//   };
// }
// const obj1 = Animal.init("hihi");

export function Validator(value) {
  this.value = value;
  this.message = "";

  this.require = function (message) {
    // Nếu đã có lỗi thì return lại đối tượng, không xử lý validate những cái sau nữa.
    if (this.message) return this;

    if (this.value.trim().length === 0) {
      this.message = message || "Không được bỏ trống.";
    }

    return this;
  };

  // Chỉ bộ là ký tự chữ.
  this.string = function (message) {
    if (this.message) return this;

    var regexString =
      /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/u;

    if (!regexString.test(this.value)) {
      this.message = message || "Yêu cầu toàn bộ là ký tự chữ.";
    }

    return this;
  };

  this.min = function (valueMin, message) {
    if (this.message) return this;
    // number, string
    var regexNumber = /^-?\d*\.?\d+$/;
    // Nếu là số
    if (regexNumber.test(this.value.trim())) {
      // Tự động coercion: bị sai định dạng
      // ép kiểm trực tiếp
      if (Number(this.value) < valueMin) {
        this.message = message || "Không được nhỏ hơn số " + valueMin;
      }
    }
    // Ngược lại là string
    else {
      if (this.value.trim().length < valueMin) {
        // this.message = message || "Không được ít hơn " + valueMin + " ký tự.";
        this.message = message || `Không được ít hơn ${valueMin} ký tự.`;
      }
    }

    return this;
  };
  this.max = function (valueMax, message) {
    if (this.message) return this;
    // number, string
    var regexNumber = /^-?\d*\.?\d+$/;
    // Nếu là số
    if (regexNumber.test(this.value.trim())) {
      if (Number(this.value) > valueMax) {
        this.message = message || "Không được lớn hơn số " + valueMax;
      }
    } else {
      if (this.value.trim().length > valueMax) {
        this.message = message || `Không được nhiều hơn ${valueMax} ký tự.`;
      }
    }

    return this;
  };
  this.email = function (message) {
    if (this.message) return this;

    var regexEmail =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (!regexEmail.test(this.value)) {
      this.message = message || "Sai định dạng email.";
    }

    return this;
  };

  // Kiểm tra đúng định dạng số tự nhiên: nguyên + thực
  this.number = function (message) {
    if (this.message) return this;

    var regexNumber = /^-?\d*\.?\d+$/;

    // false: không đúng định dạng, gán lại giá trị cho thuộc tính message
    // false -> true thêm !
    if (!regexNumber.test(this.value.trim())) {
      // Nếu không truyền thì sẽ lấy giá trị mặc định
      // message: Falsy thì nó sẽ lấy giá trị phía sau.
      this.message = message || "Giá trị nhập vào sai định dạng số tự nhiên.";
    }

    return this;
  };

  this.passWord = function (message) {
    if (this.message) return this;
    var regexPw = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!regexPw.test(this.value)) {
      this.message = message || "Ít nhất là 1 ký tự chữ và có 1 ký tự số";
    }
    return this;
  };

  // method: getter
  this.getMessage = function () {
    return this.message;
  };
}

/**
 * msv: number, ít nhất là 3 chữ số, yêu cầu bắt buộc.
 * tsv: string, bắt buộc nhập, ít nhất là 6 ký tự, nhiều nhất 50 ký tự.
 * email: bắt buộc, đúng định dạng email.
 * diemLy: bắt buộc, number, nhỏ hơn 10, lớn hơn 0.
 */

// new Validator("abc"): đối tượng.
// new Validator("abc").number(): đối tượng.
// new Validator("abc").number().message: lấy giá trị thuộc tính của đối tượng
// console.log(new Validator("a @gmail.com").require().email().getMessage());

// Dùng như này được hay không ??? Sai không được.
// console.log(new Validator("1.2.3").getMessage().number());

/**
 * 1 || 'hihi' // 1. 1
 * -1 || 'hihi' // 2. -1
 * 0 || 'hihi' // 3. hihi
 * '' || 'hihi' // 4. hihi
 */
