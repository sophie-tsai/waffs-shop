import React, { useState, useEffect } from "react";
import EmptyCart from "./EmptyCart";
import "./Cart.scss";
import { useSelector, RootStateOrAny } from "react-redux";
import CurrentFullCart from "./CurrentCart";
import OrderSummary from "./OrderSummary";

function Cart() {
  const cartState = useSelector((state: RootStateOrAny) => state.cart);
  const [windowWidth, setWindowWidth] = useState(900);

  const isCartEmpty = () => {
    return cartState.items.length === 0;
  };

  const grabAndSetWidth = () => {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    setWindowWidth(width);
  };

  useEffect(() => {
    grabAndSetWidth();

    window.addEventListener("resize", grabAndSetWidth);
    console.log(windowWidth);

    return () => window.removeEventListener("resize", grabAndSetWidth);
  }, []);

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
            {windowWidth > 700 && (
              <>
                <h1>order summary</h1>
                <hr className="hr-gray" />
              </>
            )}
            <OrderSummary />
          </div>
        )}
      </section>
    </div>
  );
}

export default Cart;
