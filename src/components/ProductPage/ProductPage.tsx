import React, { useState, useEffect } from "react";
import "./ProductPage.scss";
import { useParams, Link } from "react-router-dom";
import { GET_PRODUCT } from "../../graphql/product-queries";
import { useQuery } from "@apollo/client";
import ProductImageZoom from "./ProductImageZoom";
import ProductDetails from "./ProductDetails";

function ProductPage() {
  const [variant, setVariant] = useState("");
  const [price, setPrice] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [variantId, setVariantId] = useState("");

  const { id } = useParams();
  let productTitle: string | undefined;
  let productImage: { image: string; altText: string; id: any } | undefined;
  let productVariants:
    | { node: { price: string; image: { originalSrc: string } } }[]
    | any;
  let productDescription: string | undefined;
  let singleVariantPrice: string | undefined;

  const { loading, data: productData, error } = useQuery(GET_PRODUCT, {
    variables: { id },
  });
  // console.log(loading, productData, error);

  if (!loading && !error) {
    productTitle = productData.node.title;
    productImage = {
      image: productData.node.images.edges[0].node.originalSrc,
      altText: productData.node.images.edges[0].node.altText,
      id: productData.node.images.edges[0].node.id,
    };

    productVariants = productData.node.variants.edges;
    productDescription = productData.node.description;
    singleVariantPrice = productData.node.variants.edges[0].node.price;

    if (!featuredImage) setFeaturedImage(productImage.image);
  }

  useEffect(() => {
    if (variant) {
      let currentVariant: {
        node: { id: string; price: string; image: { originalSrc: string } };
      }[] = productVariants.filter(
        (variantNode: any) => variant === variantNode.node.title
      );
      if (currentVariant.length) {
        setPrice(currentVariant[0].node.price);
        setFeaturedImage(currentVariant[0].node.image.originalSrc);
        setVariantId(currentVariant[0].node.id);
      }
    }
  }, [variant]);

  return (
    <>
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
            / {productTitle}
          </p>
        </div>
        <section className="product-page-container-section">
          <div className="product-page-container-img">
            {featuredImage && (
              <ProductImageZoom
                imgSrc={featuredImage}
                altText={productImage?.altText}
                id={productImage?.id}
              />
            )}
          </div>
          <ProductDetails
            productTitle={productTitle}
            productVariants={productVariants}
            price={price}
            singleVariantPrice={singleVariantPrice}
            setVariant={setVariant}
            setVariantId={setVariantId}
            productDescription={productDescription}
            featuredImage={featuredImage}
            id={id}
            variantId={variantId}
            variant={variant}
            altText={productImage?.altText}
          />
        </section>
      </div>
      <hr className="theme-horizontal-bar" />
    </>
  );
}

export default ProductPage;
