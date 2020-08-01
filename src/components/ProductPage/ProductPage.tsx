import React, { useState, useEffect } from "react";
import "./ProductPage.scss";
import { useParams, Link } from "react-router-dom";
import { GET_PRODUCT } from "../../graphql/product-queries";
import { useQuery } from "@apollo/client";
import ProductImageZoom from "./ProductImageZoom";
import ProductDetails from "./ProductDetails";
// import ImageCarousel from "./ImageCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ProductPage() {
  const [queryId, setQueryId] = useState("");
  const [productQuery, setProductQuery] = useState<any>({});
  const { id } = useParams();
  const [defaultImage, setDefaultImage] = useState("");
  const [variantDetails, setVariantDetails] = useState({
    price: "",
    variantId: "",
    featuredImage: "",
    altText: "",
    variantType: "",
  });
  const [selectedVariant, setSelectedVariant] = useState("");

  // console.log({
  //   "product query": productQuery,
  //   variantName: selectedVariant,
  //   variantDetails: variantDetails,
  // });

  // SET UP & QUERY
  useEffect(() => {
    setQueryId(id);
  }, []);

  const {
    loading: productLoading,
    data: productData,
    error: productError,
  } = useQuery(GET_PRODUCT, { variables: { id: queryId } });

  const { productTitle, productDesc, productVariants, images } = productQuery;

  const hasOnlyOneVariant = () => {
    return productQuery.productVariants.length === 1;
  };

  // SET QUERY INFO TO STATE
  useEffect(() => {
    if (!productError && productData) {
      setProductQuery({
        productTitle: productData.node.title,
        productVariants: productData.node.variants.edges,
        productDesc: productData.node.description,
        images: productData.node.images.edges,
      });
    }
  }, [productLoading]);

  // SPECIFICS IF ITEM ONLY HAS ONE VARIANT
  useEffect(() => {
    if (Object.entries(productQuery).length > 1) {
      setDefaultImage(productQuery.images[0].node.originalSrc);

      if (hasOnlyOneVariant()) {
        setVariantDetails({
          price: productQuery.productVariants[0].node.price,
          variantId: productQuery.productVariants[0].node.id,
          featuredImage: productQuery.productVariants[0].node.image.originalSrc,
          variantType: productQuery.productVariants[0].node.title,
          altText: productQuery.productVariants[0].node.image.altText,
        });
      }
    }
  }, [productQuery]);

  // SPECIFICS FOR SELECTED VARIANT IF ITEM HAS MORE THAN ONE VARIANT
  useEffect(() => {
    if (selectedVariant) {
      const selectedVariantNode = productQuery.productVariants.filter(
        (element: any) => selectedVariant === element.node.title
      );

      setVariantDetails({
        price: selectedVariantNode[0].node.price,
        variantId: selectedVariantNode[0].node.id,
        featuredImage: selectedVariantNode[0].node.image.originalSrc,
        variantType: selectedVariantNode[0].node.title,
        altText: selectedVariantNode[0].node.image.altText,
      });
    }
  }, [selectedVariant]);

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
            <ProductImageZoom
              imgSrc={variantDetails.featuredImage || defaultImage}
              altText={variantDetails.altText || "@corgowaffles merchandise"}
            />
          </div>
          <ProductDetails
            setSelectedVariant={setSelectedVariant}
            variantDetails={variantDetails}
            hasOnlyOneVariant={hasOnlyOneVariant}
            productTitle={productTitle}
            productVariants={productVariants}
            productDesc={productDesc}
          />
        </section>
      </div>
      <hr className="theme-horizontal-bar" />
    </>
  );
}

export default ProductPage;
