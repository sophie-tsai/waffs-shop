import React from "react";
import "./Shop.scss";
import { useQuery } from "@apollo/react-hooks";
import { GET_PRODUCTS } from "../../graphql/product-queries";
import Product from "./Product";

function Shop() {
  const { loading, data: shopData, error } = useQuery(GET_PRODUCTS);
  let displayProducts: any;

  if (!loading && shopData) {
    const { edges: productNodes } = shopData.shop.products;
    // console.log(productNodes);
    displayProducts = productNodes.map((product: any) => (
      <Product
        key={product.node.id}
        productTitle={product.node.title}
        productImage={product.node.images.edges[0].node.src}
        id={product.node.id}
      />
    ));
  }

  return (
    <div className="shop-page">
      <h1 className="shop-headline">shop the collection</h1>
      <section>{displayProducts}</section>
    </div>
  );
}

export default Shop;
