import React from "react";
import { Link } from "react-router-dom";
import "./Product.scss";

type ProductProps = {
  key?: string;
  productImage?: string;
  altText?: string;
  productTitle: string;
  id: string;
};

function Product(props: ProductProps) {
  const { productTitle, productImage, id, altText } = props;

  const defaultProductImage =
    "https://pbs.twimg.com/media/EWiqBdYUMAA2KZv?format=jpg&name=large";
  const defaultProductTitle = "original waffles sticker";

  return (
    <div className="product-container">
      <Link to={`/shop/${id}`} className="product-link">
        <img
          src={productImage || defaultProductImage}
          className="product-thumbnail"
          alt={altText}
        />
        <p className="product-title">
          {productTitle.toLocaleLowerCase() || defaultProductTitle}
        </p>
      </Link>
    </div>
  );
}

export default Product;
