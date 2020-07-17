import React from "react";
import "./ProductPage.scss";
import { useParams, Link } from "react-router-dom";
import { GET_PRODUCT } from "../../graphql/product-queries";
import { useQuery } from "@apollo/react-hooks";

function ProductPage() {
  const { id } = useParams();
  let productTitle;
  let productImage;

  const { loading, data: productData, error } = useQuery(GET_PRODUCT, {
    variables: { id },
  });
  console.log(loading, productData, error);

  if (!loading && !error) {
    productTitle = productData.node.title;
    productImage = {
      image: productData.node.images.edges[0].node.originalSrc,
      altText: productData.node.images.edges[0].node.altText,
    };
  }

  console.log(productData);
  return (
    <div className="product-page">
      <div className="product-page-nav">
        <p>
          <Link to="/" className="product-page-nav-link">
            home
          </Link>{" "}
          /{" "}
          <Link to="/shop" className="product-page-nav-link">
            shop
          </Link>{" "}
          / {productTitle?.toLowerCase()}
        </p>
      </div>
      <section className="product-page-container-section">
        <div className="product-page-container-img">
          <img
            src={productImage?.image}
            alt={productImage?.altText}
            className="product-page-img"
          />
        </div>
        <div className="product-page-container-info">
          <p className="product-page-info-title">{productTitle}</p>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
