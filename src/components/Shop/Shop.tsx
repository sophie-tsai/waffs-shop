import React, { useEffect, useContext, useState, ReactNode } from "react";
import "./Shop.scss";
import "../LandingPage/LandingPage.scss";
import Product from "./Product";
import { QueryContext } from "../../context/QueryContext";
import { StockContext } from "../../context/StockContext";

function Shop() {
  const [displayProducts, setDisplayProducts] = useState<ReactNode[]>([]);

  const context = useContext(QueryContext);
  const { stockSet, counter } = useContext(StockContext);

  useEffect(() => {
    if (context.shopProductDisplay) {
      const productsArray = context.shopProductDisplay.map(
        (product: {
          node: {
            id: string;
            title: string;
            images: { edges: { node: { src: string; altText: string } }[] };
          };
        }) => (
          <Product
            key={product.node.id}
            productTitle={product.node.title}
            productImage={product.node.images.edges[0].node.src}
            id={product.node.id}
            altText={product.node.images.edges[0].node.altText}
            allVariantsSoldOut={stockSet.has(product.node.id)}
          />
        )
      );
      setDisplayProducts(productsArray);
      console.log("is this running " + counter);
    }
  }, [context]);

  return (
    <>
      <div className="shop-page">
        <h1 className="shop-headline">shop the collection</h1>
        <section className="shop-container">{displayProducts}</section>
        <p>{counter}</p>
      </div>
      <hr className="theme-horizontal-bar" />
    </>
  );
}

export default Shop;
