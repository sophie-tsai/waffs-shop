import React, { useState, useEffect, useContext } from "react";
import EmptyCart from "./EmptyCart";
import "./Cart.scss";
import { useSelector, RootStateOrAny } from "react-redux";
import CurrentFullCart from "./CurrentCart";
import OrderSummary from "./OrderSummary";
import { useMutation } from "@apollo/client";
import { CREATE_CHECKOUT } from "../../graphql/check-out";
import { WindowWidthContext } from "../../context/WindowWidthContext";
import { Animated } from "react-animated-css";

function Cart() {
  const cartState = useSelector((state: RootStateOrAny) => state.cart);
  const windowWidth = useContext(WindowWidthContext);
  const [createCheckoutMutation] = useMutation(CREATE_CHECKOUT);
  const [checkout, setCheckout] = useState({ webUrl: "", subtotalPrice: "" });

  const isCartEmpty = () => {
    return cartState.items.length === 0;
  };

  useEffect(() => {
    const mappedCheckoutItems = cartState.items.map(
      (item: { variantId: string; quantity: string }) => ({
        variantId: item.variantId,
        quantity: parseInt(item.quantity),
      })
    );

    // checkout mutation
    const variables = { input: { lineItems: mappedCheckoutItems } };
    createCheckoutMutation({ variables }).then(
      (res) => {
        setCheckout(res.data.checkoutCreate.checkout);
      },
      (err) => {
        console.log("create checkout error", err);
      }
    );
  }, [cartState]);

  return (
    <>
      <div className="cart-page">
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationInDuration={1500}
          animationOutDuration={1000}
          isVisible={true}
        >
          <section className="cart-page-container-section">
            <div
              className={isCartEmpty() ? `section-cart-empty` : `section-cart`}
            >
              <h1 className="">my cart</h1>
              <hr className="hr-gray" />

              {isCartEmpty() ? (
                <EmptyCart />
              ) : (
                <CurrentFullCart cart={cartState} />
              )}
            </div>

            {!isCartEmpty() && (
              <div className="section-order">
                {windowWidth > 700 && (
                  <>
                    <h1>order summary</h1>
                    <hr className="hr-gray" />
                  </>
                )}
                <OrderSummary checkout={checkout} />
              </div>
            )}
          </section>
        </Animated>
      </div>
      <hr className="theme-horizontal-bar" />
    </>
  );
}

export default Cart;
