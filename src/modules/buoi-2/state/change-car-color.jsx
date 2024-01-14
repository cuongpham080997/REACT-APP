import React, { Component } from "react";

export default class ChangeCarColor extends Component {
  constructor() {
    super();
    this.state = {
      img: "../../../../public/img/imgBlackCar.jpg",
    };
  }
  changeColor = (color) => {
    let imgSource = "";
    switch (color) {
      case "red": {
        imgSource = "../../../../public/img/imgRedCar.jpg";
        break;
      }
      case "silver": {
        imgSource = "../../../../public/img/imgSilverCar.jpg";
        break;
      }
      case "black": {
        imgSource = "../../../../public/img/imgBlackCar.jpg";
        break;
      }
    }
    console.log(imgSource);
    this.setState({
      img: imgSource,
    });
  };

  render() {
    return (
      <>
        <div>
          <div className="row">
            <div className="col-md-7">
              {/* Hiển thị hình của xe */}
              <h3>Please choose your favorite about car's color</h3>
              <img src={this.state.img} width={400} height={200} alt="" />
            </div>
            <div className="col-md-5">
              <h3>Change color</h3>
              <button
                onClick={() => this.changeColor("red")}
                className="btn btn-danger"
                style={{ color: "#fff" }}
              >
                Red color
              </button>
              <button
                onClick={() => this.changeColor("silver")}
                className="btn btn-dark"
                style={{ color: "#fff" }}
              >
                Silver color
              </button>
              <button
                onClick={() => this.changeColor("black")}
                className="btn btn-danger"
                style={{ color: "#fff", backgroundColor: "#000" }}
              >
                Black color
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
