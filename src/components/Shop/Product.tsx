import React, { FC } from "react";
import "./Product.scss";

type ProductProps = {
  key?: string;
  productImage?: string;
  productPrice?: string;
  productTitle: string;
};

function Product(props: ProductProps) {
  const { productTitle, productImage } = props;

  const defaultProductImage =
    "https://pbs.twimg.com/media/EWiqBdYUMAA2KZv?format=jpg&name=large";
  const defaultProductTitle = "original waffles sticker";
  const productPrice = "2.99";

  return (
    <div className="product-container">
      <img
        src={productImage || defaultProductImage}
        className="product-thumbnail"
      />
      <p className="product-title">
        {productTitle.toLocaleLowerCase() || defaultProductTitle}
      </p>
      {/* <p className="product-price">{productPrice}</p> */}
    </div>
  );
}

export default Product;
