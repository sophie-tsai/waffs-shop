import React, { useEffect, useContext, useState, ReactNode } from "react";
import "./Shop.scss";
import "../LandingPage/LandingPage.scss";
import Product from "./Product";
import { QueryContext } from "../../context/QueryContext";
// import { StockContext } from "../../context/StockContext";

function Shop() {
  const [displayProducts, setDisplayProducts] = useState<ReactNode[]>([]);

  const context = useContext(QueryContext);
  // const { stockSet } = useContext(StockContext);

  useEffect(() => {
    if (context.shopProductDisplay) {
      const productsArray = asProductComponent(context.shopProductDisplay);
      setDisplayProducts(productsArray);
    }
  }, [context]);

  return (
    <>
      <div className="shop-page">
        <h1 className="shop-headline">shop the collection</h1>
        <section className="shop-container">{displayProducts}</section>
      </div>
      <hr className="theme-horizontal-bar" />
    </>
  );
}

function asProductComponent(shopProductDisplay: any[]): any[] {
  const unavailable = getUnavailableSet(shopProductDisplay);
  return shopProductDisplay.map(
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
        allVariantsSoldOut={unavailable.has(product.node.id)}
      />
    )
  );
}

function getUnavailableSet(shopProductDisplay: any[]) {
  const unavailable = new Set();
  for (let product of shopProductDisplay) {
    let isAdded: boolean = false;
    const productVariants = product.node.variants.edges;
    for (let variant of productVariants) {
      if (variant.node.availableForSale) {
        isAdded = true;
        break;
      }
    }
    if (!isAdded) {
      unavailable.add(product.node.id);
    }
  }
  return unavailable;
}

export default Shop;
