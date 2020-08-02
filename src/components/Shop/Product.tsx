import React from "react";
import { Link } from "react-router-dom";
import "./Product.scss";

type ProductProps = {
  key?: string;
  productImage?: string;
  altText?: string;
  productTitle: string;
  id: string;
  allVariantsSoldOut: boolean;
};

function Product(props: ProductProps) {
  const { productTitle, productImage, id, altText, allVariantsSoldOut } = props;

  return (
    <div className={`product-container `}>
      <Link to={`/shop/${id}`} className="product-link">
        <img
          src={productImage}
          className={`product-thumbnail ${
            allVariantsSoldOut && `out-of-stock`
          }`}
          alt={altText}
        />
        <p className={`product-title ${allVariantsSoldOut && `line-through`}`}>
          {productTitle.toLocaleLowerCase()}
        </p>
        {allVariantsSoldOut && (
          <p className="product-sold-out-text">sold out</p>
        )}
      </Link>
    </div>
  );
}

export default Product;
