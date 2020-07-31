import React, { useState, useEffect } from "react";
import { useSelector, RootStateOrAny } from "react-redux";

type OrderSummaryProps = {
  checkout: { webUrl: string };
};

function OrderSummary(props: OrderSummaryProps) {
  const [subtotal, setSubtotal] = useState("");
  const { webUrl } = props.checkout;
  const cartState = useSelector((state: RootStateOrAny) => state.cart);

  useEffect(() => {
    if (cartState.items.length > 0) {
      const arrayOfSubtotals: number[] = cartState.items.map(
        (item: { price: string; quantity: string }) =>
          parseFloat(item.price) * parseInt(item.quantity)
      );

      const sumOfSubtotals: number = arrayOfSubtotals.reduce(
        (acc: number, cur: number) => acc + cur
      );

      const formattedSubtotal: string = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(sumOfSubtotals);

      setSubtotal(formattedSubtotal);
    }
  }, [cartState]);

  const openCheckout = () => {
    window.open(webUrl);
  };

  return (
    <section className="order-summary-container">
      <div className="order-summary-flex-row">
        <span className="order-summary-subtotal">subtotal</span>
        <span className="order-summary-subtotal">{subtotal}</span>
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
