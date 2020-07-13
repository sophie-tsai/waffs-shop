import React from "react";
import "./Shop.scss";
import { useQuery } from "@apollo/react-hooks";
import { GET_PRODUCTS } from "../../graphql/get-products";

function Shop() {
  const { data: shopData } = useQuery(GET_PRODUCTS);
  console.log(shopData);

  return (
    <div className="shop-page">
      <h1>Shop Page</h1>
    </div>
  );
}

export default Shop;
