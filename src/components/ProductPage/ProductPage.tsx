import React, { useState, useEffect, ChangeEvent } from "react";
import "./ProductPage.scss";
import { useParams, Link } from "react-router-dom";
import { GET_PRODUCT } from "../../graphql/product-queries";
import { useQuery } from "@apollo/client";

function ProductPage() {
  const [variant, setVariant] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [featuredImage, setFeaturedImage] = useState("");

  const { id } = useParams();
  let productTitle: string | undefined;
  let productImage: { image: string; altText: string } | undefined;
  let productVariants:
    | { node: { price: string; image: { originalSrc: string } } }[]
    | any;
  let productDescription: string | undefined;
  let singleVariantPrice: string | undefined;

  const { loading, data: productData, error } = useQuery(GET_PRODUCT, {
    variables: { id },
  });
  console.log(loading, productData, error);

  if (!loading && !error) {
    productTitle = productData.node.title;
    productImage = {
      image: productData.node.images.edges[0].node.originalSrc,
      altText: productData.node.images.edges[0].node.altText,
    };
    productVariants = productData.node.variants.edges;
    productDescription = productData.node.description;
    singleVariantPrice = productData.node.variants.edges[0].node.price;

    if (!featuredImage) setFeaturedImage(productImage.image);
  }

  const selectVariantOption = productVariants?.map((variant: any) => (
    <option key={variant.node.id}>{variant.node.title}</option>
  ));

  const handleDropDown = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setVariant(value);
  };

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuantity(value);
  };

  useEffect(() => {
    if (variant) {
      let currentVariant: {
        node: { price: string; image: { originalSrc: string } };
      }[] = productVariants.filter(
        (variantNode: any) => variant === variantNode.node.title
      );
      setPrice(currentVariant[0].node.price);
      setFeaturedImage(currentVariant[0].node.image.originalSrc);
    }
  }, [variant]);

  return (
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
          <img
            src={featuredImage}
            alt={productImage?.altText}
            className="product-page-img"
          />
        </div>
        <div className="product-page-container-info">
          <p className="product-page-info-title">{productTitle}</p>
          {productVariants &&
            (productVariants.length > 1 ? (
              <p className="product-page-price">{price && `$${price}`}</p>
            ) : (
              <p className="product-page-price">{singleVariantPrice}</p>
            ))}

          {productVariants && productVariants.length > 1 && (
            <>
              <p className="product-page-label">style</p>
              <select onChange={handleDropDown}>
                <option value="">please choose an option</option>
                {selectVariantOption}
              </select>
            </>
          )}

          <p className="product-page-label">quantity</p>
          <input
            type="number"
            min="1"
            value={quantity}
            className="product-page-quantity-input"
            onChange={handleQuantityChange}
          />
          <button className="product-page-add-cart">add to cart</button>
          <p className="product-page-description-label">product details</p>
          <p className="product-page-description">{productDescription}</p>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
