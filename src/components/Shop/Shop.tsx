import React, { useContext } from "react";
import "./Shop.scss";
import "../Landing/Landing.scss";
import Product from "./Product";
import { QueryContext } from "../../context/QueryContext";
import { DiscountContext } from "../../context/DiscountContext";
import { Animated } from "react-animated-css";

export default function Shop() {
  const queryContext = useContext(QueryContext);
  const discountContext = useContext(DiscountContext);
  console.log("codes", discountContext);
  return (
    <>
      <div className="shop-page">
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationInDuration={1200}
          animationOutDuration={1200}
          isVisible={true}
        >
          <h1 className="shop-headline">shop the collection</h1>
          <section className="shop-container">
            {asProductComponent(queryContext.shopProductDisplay)}
          </section>
        </Animated>
      </div>
      <hr className="theme-horizontal-bar" />
    </>
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
        productTitle={product.node.title.toLowerCase()}
        productImage={product.node.images.edges[0].node.src}
        id={product.node.id}
        altText={product.node.images.edges[0].node.altText}
        allVariantsSoldOut={unavailable.has(product.node.id)}
      />
    )
  );
}
