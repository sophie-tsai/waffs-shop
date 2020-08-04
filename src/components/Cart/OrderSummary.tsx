import React from "react";

type OrderSummaryProps = {
  checkout: { webUrl: string; subtotalPrice: string };
};

function OrderSummary(props: OrderSummaryProps) {
  const { webUrl, subtotalPrice } = props.checkout;

  const openCheckout = () => {
    window.open(webUrl);
  };

  const zeroDollars = "0.00";

  return (
    <section className="order-summary-container">
      <div className="order-summary-flex-row">
        <span className="order-summary-subtotal">subtotal</span>
        {subtotalPrice && subtotalPrice !== zeroDollars && (
          <span className="order-summary-subtotal">${subtotalPrice}</span>
        )}
      </div>
      <p style={{ textAlign: "center" }}>
        taxes & shipping calculated at checkout
      </p>

      <button className="order-summary-checkout" onClick={openCheckout}>
        check out
      </button>
    </section>
  );
}

export default OrderSummary;
