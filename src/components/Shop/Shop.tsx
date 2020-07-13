import React from "react";
import "./Shop.scss";
import { useQuery } from "@apollo/react-hooks";
import { GET_PRODUCTS } from "../../graphql/get-products";
import Product from "./Product";

function Shop() {
  const { data: shopData } = useQuery(GET_PRODUCTS);
  console.log(shopData);

  return (
    <div className="shop-page">
      <h1 className="shop-headline">shop the collection</h1>
      <section>
        <Product />
      </section>
    </div>
  );
}

export default Shop;
