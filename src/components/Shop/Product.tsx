import React, { FC } from "react";
import "./Product.scss";

const Product: FC = () => {
  const productImage =
    "https://i.etsystatic.com/19338232/r/il/92a7a1/1794572545/il_570xN.1794572545_ev8q.jpg";
  const productTitle = "original waffles sticker";
  const productPrice = "2.99";

  return (
    <div className="product-container">
      <img src={productImage} className="product-thumbnail" />
      <p className="product-title">{productTitle}</p>
      <p className="product-price">{productPrice}</p>
    </div>
  );
};

export default Product;
