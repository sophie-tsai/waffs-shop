import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import { useDispatch } from "react-redux";

type CartItemProps = {
  variantId: string;
  imgSrc: string;
  price: string;
  productTitle: string;
  quantity: string;
  type: string;
};

function CartItem(props: CartItemProps) {
  const { variantId, imgSrc, price, productTitle, quantity, type } = props;
  const subtotal = eval(`price*quantity`);

  return (
    <div>
      <div className="cart-item-container">
        <div className="cart-item-flex-row">
          <div className="cart-item-image-container">
            <img className="cart-item-image" src={imgSrc} />
          </div>
          <div className="cart-item-flex-column">
            <p className="cart-item-title">{productTitle}</p>
            <p className="cart-item-info">${price}</p>
            <p className="cart-item-info">style: {type}</p>
          </div>
        </div>
        <div className="cart-item-flex-row">
          <input
            type="number"
            min={1}
            value={quantity}
            className="cart-item-quantity-input"
          />
          <p className="cart-item-subtotal">${subtotal}</p>
        </div>
        <div>
          <button className="cart-item-remove">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
      <hr className="hr-gray" />
    </div>
  );
}

export default CartItem;
