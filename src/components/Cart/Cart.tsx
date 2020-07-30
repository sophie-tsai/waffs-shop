import React from "react";
import EmptyCart from "./EmptyCart";
import "./Cart.scss";
import { useSelector, RootStateOrAny } from "react-redux";
import CurrentFullCart from "./CurrentCart";
import OrderSummary from "./OrderSummary";

function Cart() {
  const cartState = useSelector((state: RootStateOrAny) => state.cart);

  const isCartEmpty = () => {
    return cartState.items.length === 0;
  };

  return (
    <div className="cart-page">
      <section className="cart-page-container-section">
        <div className={isCartEmpty() ? `section-cart-empty` : `section-cart`}>
          <h1 className="">my cart</h1>
          <hr className="hr-gray" />

          {isCartEmpty() ? <EmptyCart /> : <CurrentFullCart cart={cartState} />}
        </div>

        {!isCartEmpty() && (
          <div className="section-order">
            <h1>order summary</h1>
            <hr className="hr-gray" />
            <OrderSummary />
          </div>
        )}
      </section>
    </div>
  );
}

export default Cart;
