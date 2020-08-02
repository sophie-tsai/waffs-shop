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
    <div
      className={`product-container ${allVariantsSoldOut && `out-of-stock`}`}
    >
      <Link to={`/shop/${id}`} className="product-link">
        <img src={productImage} className="product-thumbnail" alt={altText} />
        <p className="product-title">{productTitle.toLocaleLowerCase()}</p>
        {allVariantsSoldOut && <p>sold out</p>}
      </Link>
    </div>
  );
}

export default Product;
