import React, { ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { changeQuantity, deleteItem } from "../../redux/cartItems";

type CartItemProps = {
  variantId: string;
  imgSrc: string;
  price: string;
  productTitle: string;
  quantity: string;
  type: string;
  altText: string | undefined;
};

function CartItem(props: CartItemProps) {
  const {
    variantId,
    imgSrc,
    price,
    productTitle,
    quantity,
    type,
    altText,
  } = props;
  const subtotal: number = parseFloat(price) * parseFloat(quantity);
  const formattedSubtotal: string = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(subtotal);

  const dispatch = useDispatch();

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const difference = (parseInt(value) - parseInt(quantity)).toString();
    dispatch(changeQuantity({ id: variantId, quantity: difference }));
  };

  const handleDelete = () => {
    dispatch(deleteItem(variantId));
  };

  return (
    <div>
      <div className="cart-item-container">
        <div className="cart-item-flex-row">
          <div className="cart-item-image-container">
            <img className="cart-item-image" src={imgSrc} alt={altText} />
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
            onChange={handleQuantityChange}
            className="cart-item-quantity-input"
          />
          <p className="cart-item-subtotal">{formattedSubtotal}</p>
        </div>
        <div>
          <button className="cart-item-remove">
            <FontAwesomeIcon icon={faTimes} onClick={handleDelete} />
          </button>
        </div>
      </div>
      <hr className="hr-gray" />
    </div>
  );
}

export default CartItem;
