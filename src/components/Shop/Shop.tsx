import React from "react";
import "./Shop.scss";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../graphql/product-queries";
import Product from "./Product";

function Shop() {
  const { loading, data: shopData, error } = useQuery(GET_PRODUCTS);
  let displayProducts: any;
  console.log(error);

  if (!loading && !error) {
    const { edges: productNodes } = shopData.shop.products;

    displayProducts = productNodes.map((product: any) => (
      <Product
        key={product.node.id}
        productTitle={product.node.title}
        productImage={product.node.images.edges[0].node.src}
        id={product.node.id}
        altText={product.node.images.edges[0].node.altText}
      />
    ));
  }

  return (
    <div className="shop-page">
      <h1 className="shop-headline">shop the collection</h1>
      <section>
        {error ? (
          <p className="error-message">
            oops, there was an error, please try again
          </p>
        ) : (
          displayProducts
        )}
      </section>
    </div>
  );
}

export default Shop;
