import React from "react";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="empty-cart-container">
      <h1 className="empty-cart-text">cart is empty</h1>
      <p>
        <Link to="/shop" className="empty-cart-link">
          continue shopping!
        </Link>
      </p>
    </div>
  );
}

export default EmptyCart;
