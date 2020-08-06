import React from "react";
import { getDisplayPrice } from "./priceUtils";

type OrderSummaryProps = {
  checkout: { webUrl: string; subtotalPrice: string };
};

function OrderSummary(props: OrderSummaryProps) {
  const { webUrl, subtotalPrice } = props.checkout;

  return (
    <section className="order-summary-container">
      <div className="order-summary-flex-row">
        <span className="order-summary-subtotal">subtotal</span>
        {!isOrderEmpty(subtotalPrice) && (
          <span className="order-summary-subtotal">
            {getDisplayPrice(subtotalPrice)}
          </span>
        )}
      </div>
      <p style={{ textAlign: "center" }}>
        taxes & shipping calculated at checkout
      </p>

      <button
        className="order-summary-checkout"
        onClick={() => openCheckout(webUrl)}
      >
        check out
      </button>
    </section>
  );
}

const openCheckout = (url: string) => {
  window.open(url);
};

const isOrderEmpty = (subtotalPrice: string) => {
  return subtotalPrice && subtotalPrice === "0.00";
};

export default OrderSummary;
