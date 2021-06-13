import React, { Component } from "react";
import { Link } from "react-router-dom";

class Cart extends Component {
  state = {};
  render() {
    const { addToCartCount, cartLink } = this.props;
    return (
      <Link to={cartLink}>
        <i style={{ size: 10 }} className="fa fa-2x fa-shopping-cart clickable">
          {addToCartCount !== 0 ? (
            <span style={{ fontSize: 7 }} className="badge bg-primary">
              {addToCartCount}
            </span>
          ) : (
            ""
          )}
        </i>
      </Link>
    );
  }
}

export default Cart;
