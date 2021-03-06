import React, { ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { changeQuantity, deleteItem } from "../../redux/cartItems";
import { Link } from "react-router-dom";
import { getDisplayPrice, getDisplayTotal } from "./priceUtils";

type CartItemProps = {
  variantId: string;
  imgSrc: string;
  price: string;
  productTitle: string;
  quantity: string;
  variantType: string;
  altText: string | undefined;
  productId: string;
};

function CartItem(props: CartItemProps) {
  const {
    variantId,
    imgSrc,
    price,
    productTitle,
    quantity,
    variantType,
    altText,
    productId,
  } = props;

  const dispatch = useDispatch();

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (parseInt(value) < 1 || value === "") {
      dispatch(deleteItem(variantId));
      return;
    }

    const difference = (parseInt(value) - parseInt(quantity)).toString();
    dispatch(changeQuantity({ id: variantId, quantity: difference }));
  };

  const handleDelete = () => {
    dispatch(deleteItem(variantId));
  };

  return (
    <div>
      <div className="cart-item-container">
        <div className="cart-item-main-section">
          {/* product photo, information */}
          <div className="cart-item-flex-row">
            <div className="cart-item-image-container">
              <img className="cart-item-image" src={imgSrc} alt={altText} />
            </div>
            <div className="cart-item-description">
              <p className="cart-item-title">
                <Link
                  to={`/shop/${productId}`}
                  className="cart-item-title-link"
                >
                  {productTitle}
                </Link>
              </p>
              <p className="cart-item-info">{getDisplayPrice(price)}</p>
              {variantType && variantType !== "Default Title" && (
                <p className="cart-item-info">style: {variantType}</p>
              )}
            </div>
          </div>

          {/* product price, quantity */}
          <div className="cart-item-quantity-price">
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={handleQuantityChange}
              className="cart-item-quantity-input"
            />
            <p className="cart-item-subtotal">
              {getDisplayTotal(price, quantity)}
            </p>
          </div>
        </div>

        {/* delete item */}
        <button className="cart-item-remove">
          <FontAwesomeIcon icon={faTimes} onClick={handleDelete} />
        </button>
      </div>
      <hr className="hr-gray" />
    </div>
  );
}

export default CartItem;
