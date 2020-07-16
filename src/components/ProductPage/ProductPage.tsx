import React from "react";
import "./ProductPage.scss";
import { useParams } from "react-router-dom";
import { GET_PRODUCT } from "../../graphql/product-queries";
import { useQuery } from "@apollo/react-hooks";

function ProductPage() {
  const { id } = useParams();

  const { loading, data: productData, error } = useQuery(GET_PRODUCT, {
    variables: { id },
  });
  console.log(loading, productData, error);

  if (!loading && !error) {
  }
  return (
    <div className="product-page">
      <div className="product-nav"></div>
    </div>
  );
}

export default ProductPage;
