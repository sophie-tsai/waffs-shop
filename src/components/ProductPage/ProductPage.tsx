import React, { useState, useEffect } from 'react';
import './ProductPage.scss';
import { useParams, Link } from 'react-router-dom';
import { GET_PRODUCT } from '../../graphql/product-queries';
import { useQuery } from '@apollo/client';
import ProductDetails from './ProductDetails';
import ImageCarousel from './ImageCarousel';
import { Animated } from 'react-animated-css';

import cn from 'classnames';

function ProductPage({ paddingLarge }: { paddingLarge: boolean }) {
  const [productQuery, setProductQuery] = useState<any>({});
  const { id } = useParams();

  const [variantDetails, setVariantDetails] = useState({
    price: '',
    variantId: '',
    featuredImage: '',
    altText: '',
    variantType: '',
    availableForSale: true,
  });
  const [selectedVariant, setSelectedVariant] = useState('');

  // SET UP & QUERY
  const {
    loading: productLoading,
    data: productData,
    error: productError,
  } = useQuery(GET_PRODUCT, { variables: { id: id } });

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
      if (hasOnlyOneVariant()) {
        setVariantDetails({
          price: productVariants[0].node.price,
          variantId: productVariants[0].node.id,
          featuredImage: productVariants[0].node.image.originalSrc,
          variantType: productVariants[0].node.title,
          altText: productVariants[0].node.image.altText,
          availableForSale: productVariants[0].node.availableForSale,
        });
      }
    }
  }, [productQuery]);

  // SPECIFICS FOR SELECTED VARIANT IF ITEM HAS MORE THAN ONE VARIANT
  useEffect(() => {
    if (selectedVariant) {
      const selectedVariantNode = productVariants.filter(
        (element: any) => selectedVariant === element.node.title
      );

      setVariantDetails({
        price: selectedVariantNode[0].node.price,
        variantId: selectedVariantNode[0].node.id,
        featuredImage: selectedVariantNode[0].node.image.originalSrc,
        variantType: selectedVariantNode[0].node.title,
        altText: selectedVariantNode[0].node.image.altText,
        availableForSale: selectedVariantNode[0].node.availableForSale,
      });
    }
  }, [selectedVariant]);

  return (
    <>
      <div className={cn('product-page', { 'padding-lg': paddingLarge })}>
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationInDuration={1200}
          animationOutDuration={1200}
          isVisible={true}
        >
          <div className="product-page-nav">
            <p>
              <Link to="/" className="product-page-nav-link">
                home
              </Link>{' '}
              /{' '}
              <Link to="/shop" className="product-page-nav-link">
                shop
              </Link>{' '}
              / {productTitle}
            </p>
          </div>
          <section className="product-page-container-section">
            <div className="product-page-container-img">
              <ImageCarousel images={images} />
            </div>
            <ProductDetails
              selectedVariant={selectedVariant}
              setSelectedVariant={setSelectedVariant}
              variantDetails={variantDetails}
              hasOnlyOneVariant={hasOnlyOneVariant}
              productTitle={productTitle}
              productVariants={productVariants}
              productDesc={productDesc}
              productId={id}
            />
          </section>
        </Animated>
      </div>
      <hr className="theme-horizontal-bar" />
    </>
  );
}

export default ProductPage;
