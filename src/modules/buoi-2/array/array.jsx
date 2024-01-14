import React, { Component } from "react";

const listCar = [
  {
    id: 1,
    name: "Car 1",
    price: "99",
    image: "https://i.pravatar.cc?img=1",
  },
  {
    id: 2,
    name: "Car 2",
    price: "92",
    image: "https://i.pravatar.cc?img=2",
  },
  {
    id: 3,
    name: "Car 3",
    price: "93",
    image: "https://i.pravatar.cc?img=3",
  },
  {
    id: 4,
    name: "Car 4",
    price: "94",
    image: "https://i.pravatar.cc?img=4",
  },
];

/**
 * Khi render với mảng thì mỗi phần tử con nên có key ở thẻ bao ọc ngoài cùng lớn nhất của mỗi phần tử đó
 */

export default class Array extends Component {
  renderListCar = () => {
    const listTr = listCar.map((item) => {
      return (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.name}</td>
          <td>{item.price}$</td>
          <td>
            <img style={{ width: 100, height: 100 }} src={item.image} />
          </td>
        </tr>
      );
    });

    return listTr;
  };

  renderListButton = () => {
    const colors = ["black", "green", "blue", "yellow"];

    const listButton = colors.map((item) => {
      return (
        <button key={item} className="btn btn-success mx-2">
          {item}
        </button>
      );
    });

    return listButton;
  };

  render() {
    // return [
    //   <button className="btn btn-success mx-2">1</button>,
    //   <button className="btn btn-success">2</button>,
    // ];

    // .map: lặp qua từng phần tử của mảng và trả về phần tử mới ứng với return

    return (
      <div>
        {/* {[
          <button className="btn btn-success mx-2">black</button>,
          <button className="btn btn-success mx-2">green</button>,
          <button className="btn btn-success mx-2">blue</button>,
          <button className="btn btn-success mx-2">yellow</button>,
        ]} */}

        {/* {colors.map((item) => {
          return (
            <button key={item} className="btn btn-success mx-2">
              {item}
            </button>
          );
        })} */}

        {this.renderListButton()}

        <hr />

        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">price</th>
              <th scope="col">image</th>
            </tr>
          </thead>
          <tbody>{this.renderListCar()}</tbody>
        </table>
      </div>
    );
  }
}
