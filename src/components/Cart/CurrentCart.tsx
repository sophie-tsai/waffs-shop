import React, { Dispatch, SetStateAction } from "react";
import { RootStateOrAny } from "react-redux";
import CartItem from "./CartItem";

type CurrentFullCartProps = {
  setSubtotal: Dispatch<SetStateAction<string>>;
  cart: RootStateOrAny;
};

function CurrentFullCart(props: CurrentFullCartProps) {
  const { setSubtotal, cart } = props;
  console.log(cart);

  const displayCart = cart.items.map(
    (item: {
      id: string;
      imgSrc: string;
      price: string;
      productTitle: string;
      quantity: string;
      type: string;
    }) => (
      <CartItem
        key={item.id}
        id={item.id}
        imgSrc={item.imgSrc}
        price={item.price}
        productTitle={item.productTitle}
        quantity={item.quantity}
        type={item.type}
      />
    )
  );
  return <h1>{displayCart}</h1>;
}

export default CurrentFullCart;
