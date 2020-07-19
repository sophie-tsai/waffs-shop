import React, { useState, useEffect, ChangeEvent } from "react";
import "./ProductPage.scss";
import { useParams, Link } from "react-router-dom";
import { GET_PRODUCT } from "../../graphql/product-queries";
import { useQuery } from "@apollo/client";

function ProductPage() {
  const [variant, setVariant] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("1");

  const { id } = useParams();
  let productTitle: string | undefined;
  let productImage: { image: string; altText: string } | undefined;
  let productVariants: { node: {} }[] | any;

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
        node: { price: string };
      }[] = productVariants.filter(
        (variantNode: any) => variant === variantNode.node.title
      );
      setPrice(currentVariant[0].node.price);
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
            src={productImage?.image}
            alt={productImage?.altText}
            className="product-page-img"
          />
        </div>
        <div className="product-page-container-info">
          <p className="product-page-info-title">{productTitle}</p>
          <p className="product-page-price">{price && `$ ${price}`}</p>

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
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
