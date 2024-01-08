import React, { Component } from "react";

export default class RandomImage extends Component {
  constructor() {
    super();

    this.state = {
      random: 0,
    };
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  render() {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src = {`https://i.pravatar.cc/?img=${this.state.random}`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-primary" onClick= {
              ()=>{
                this.setState(
                  {random: this.getRandomInt(10)}
                )
              }
            }>Random</button>
          </div>
        </div>
      </div>
    );
  }
}
