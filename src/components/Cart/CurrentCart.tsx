import React from "react";
import { RootStateOrAny } from "react-redux";
import CartItem from "./CartItem";

type CurrentFullCartProps = {
  cart: RootStateOrAny;
};

function CurrentFullCart(props: CurrentFullCartProps) {
  const { cart } = props;
  console.log(cart);

  const displayCart = cart.items.map(
    (item: {
      variantId: string;
      imgSrc: string;
      price: string;
      productTitle: string;
      quantity: string;
      type: string;
      altText?: string;
    }) => (
      <CartItem
        key={item.variantId}
        variantId={item.variantId}
        imgSrc={item.imgSrc}
        price={item.price}
        productTitle={item.productTitle}
        quantity={item.quantity}
        type={item.type}
        altText={item.altText}
      />
    )
  );
  return <h1>{displayCart}</h1>;
}

export default CurrentFullCart;
