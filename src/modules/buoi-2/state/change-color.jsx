import React, { Component } from "react";

export default class ChangeColor extends Component {
  constructor() {
    super();

    this.state = {
      bgcolor: 'none',
    };
  }
  render() {
    return (
      <div>
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: this.state.bgcolor,
          }}
        ></div>

        <div>
          <button
            className="btn btn-dark mx-2"
            onClick={() => {
              this.setState({
                bgcolor: "black",
              });
            }}
          >
            Black
          </button>
          <button
            className="btn btn-warning mx-2"
            onClick={() => {
              this.setState({
                bgcolor: "yellow",
              });
            }}
          >
            Yellow
          </button>
          <button
            className="btn btn-primary mx-2"
            onClick={() => {
              this.setState({
                bgcolor: "blue",
              });
            }}
          >
            Blue
          </button>
          <button className="btn btn-success mx-2" onClick={()=>{
                          this.setState({
                            bgcolor: "green",
                          });
          }}>Green</button>
        </div>
      </div>
    );
  }
}
