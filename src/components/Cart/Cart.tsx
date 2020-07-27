import React from "react";
import "./Cart.scss";

function Cart() {
  return (
    <div className="cart-page">
      <section className="cart-page-container-section">
        <div className="section-cart">
          <h1 className="">my cart</h1>
          <hr className="hr-gray" />
        </div>
        <div className="section-order">
          <h1>order summary</h1>
          <hr className="hr-gray" />
        </div>
      </section>
    </div>
  );
}

export default Cart;

/**
 * image src
 * product name
 * variant type
 * quantity
 * price
 * product id?
 *
 * */
