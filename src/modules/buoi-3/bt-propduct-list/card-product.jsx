import React, { Component } from "react";

export default class CardProduct extends Component {
  // ở component này gọi method printNameProduct ở component BtProductList

  /**
   * 1. Gắn sự kiện click cho button add to cart
   * 2. Khi click thì chúng ta sẽ gọi printNameProduct
   * 3.
   */
  render() {
    const { data: product } = this.props;

    return (
      // Không truyền key ở đây
      <div className="card" style={{ width: "18rem" }}>
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.shortDescription}</p>
          <p className="card-text">${product.price}</p>
          <button
            onClick={() => {
              this.props.handlePrint(product.name);
            }}
            className="btn btn-primary"
          >
            add to cart
          </button>
        </div>
      </div>
    );
  }
}
