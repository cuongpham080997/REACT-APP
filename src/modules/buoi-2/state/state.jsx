import React, { Component } from "react";

/**
 * state: trạng thái của một component
 *
 */
// class Component {
//   state = {};
//   setState(object) {
//     Object.entries(object).forEach(([key, value]) => {
//       state[key] = value;
//     });
//   }
// }

/**
 * - Sau khi cập nhật state thì method render tự động gọi lại.
 * - Để cập nhật state thì chúng ta phải sử dụng method setState được kế thừa từ class cha Component.
 *
 */

/**
 * 1. Cách khai báo state.
 * 2. Cách sử dụng.
 * 3. Cách cập nhật state.
 * 4. Nguyên tắc hoạt động: tự động gọi lại method render của component.
 */

export default class State extends Component {
  constructor() {
    super();

    // Khai báo state của component
    this.state = {
      isLogin: true,
    };
  }

  showAction = () => {
    if (this.state.isLogin) {
      return (
        <div>
          <span>DaiNgo</span>
          <button
            className="btn btn-success mx-2"
            onClick={() => {
              const newState = {
                isLogin: false,
              };
              this.setState(newState);
            }}
          >
            Đăng Xuất
          </button>
        </div>
      );
    }

    return (
      <div>
        <button className="btn btn-success mx-2">Đăng Ký</button>
        <button
          className="btn btn-success"
          onClick={() => {
            const newState = {
              isLogin: true,
            };
            this.setState(newState);
          }}
        >
          Đăng Nhập
        </button>
      </div>
    );
  };

  render() {
    console.log("render");
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="#"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>

              {/* Sử dụng toán tử 3 ngôi để render với điều kiện. */}

              {/* {isLogin ? (
                <div>
                  <span>DaiNgo</span>
                  <button className="btn btn-success mx-2">Đăng Xuất</button>
                </div>
              ) : (
                <div>
                  <button className="btn btn-success mx-2">Đăng Ký</button>
                  <button className="btn btn-success">Đăng Nhập</button>
                </div>
              )} */}

              {this.showAction()}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
            