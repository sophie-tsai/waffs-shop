import React from "react";
import { useParams } from "react-router-dom";
import { GET_PRODUCT } from "../../graphql/product-queries";
import { useQuery } from "@apollo/react-hooks";

function ProductPage() {
  const { id } = useParams();
  const { loading, data: productData, error } = useQuery(GET_PRODUCT);
  console.log(id);

  if (!loading && productData) {
  }
  return <div>ProductPage</div>;
}

export default ProductPage;
