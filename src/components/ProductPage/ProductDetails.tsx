import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartItems";

type ProductDetailsProps = {
  productTitle: string | undefined;
  productVariants:
    | { node: { price: string; image: { originalSrc: string } } }[]
    | any;
  price: string;
  singleVariantPrice: string | undefined;
  setVariant: Dispatch<SetStateAction<string>>;
  productDescription: string | undefined;
  featuredImage: string;
  id: string;
  variant: string;
};

function ProductDetails(props: ProductDetailsProps) {
  const [quantity, setQuantity] = useState("1");
  const [errorMessage, setErrorMessage] = useState("");

  const missingVariant: string = "please choose a style to add item to cart";
  const {
    productTitle,
    productVariants,
    price,
    singleVariantPrice,
    setVariant,
    productDescription,
    featuredImage,
    id,
    variant,
  } = props;

  const dispatch = useDispatch();

  const handleDropDown = (event: ChangeEvent<HTMLSelectElement>) => {
    if (errorMessage) setErrorMessage("");

    const { value } = event.target;
    setVariant(value);
  };

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuantity(value);
  };

  const selectVariantOption = productVariants?.map((variant: any) => (
    <option key={variant.node.id}>{variant.node.title}</option>
  ));

  const handleAdd = () => {
    if (!variant) {
      setErrorMessage(missingVariant);
      return;
    }

    dispatch(
      addItem({
        id: id,
        imgSrc: featuredImage,
        productTitle: productTitle,
        type: variant,
        quantity: quantity,
        price: price,
      })
    );
  };

  const displayPrice = productVariants && (
    <p className="product-page-price">
      {productVariants.length > 1 ? price && `$${price}` : singleVariantPrice}
    </p>
  );

  return (
    <>
      <div className="product-page-container-info">
        <p className="product-page-info-title">{productTitle}</p>
        <p className="product-error-message">{errorMessage}</p>

        {variant && displayPrice}
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
        <button className="product-page-add-cart" onClick={handleAdd}>
          add to cart
        </button>
        <p className="product-page-description-label">product details</p>
        <p className="product-page-description">{productDescription}</p>
      </div>
    </>
  );
}

export default ProductDetails;
