import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { addItem, changeQuantity } from "../../redux/cartItems";
import { useHistory } from "react-router-dom";

type ProductDetailsProps = {
  selectedVariant: string;
  setSelectedVariant: Dispatch<SetStateAction<string>>;
  variantDetails: {
    price: string;
    variantId: string;
    featuredImage: string;
    altText: string;
    variantType: string;
    availableForSale: boolean;
  };
  hasOnlyOneVariant: () => boolean;
  productTitle: string;
  productVariants: {
    node: { price: string; image: { originalSrc: string } };
  }[];
  productDesc: string;
  productId: string;
};

function ProductDetails(props: ProductDetailsProps) {
  const [quantity, setQuantity] = useState("1");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const cartState = useSelector((state: RootStateOrAny) => state.cart);
  const missingVariant: string = "select a style";

  const {
    selectedVariant,
    setSelectedVariant,
    productTitle,
    productVariants,
    hasOnlyOneVariant,
    productDesc,
    variantDetails,
    productId,
  } = props;

  // console.log("props", props);
  // console.log("global state", cartState.items);

  const handleDropDown = (event: ChangeEvent<HTMLSelectElement>) => {
    if (errorMessage) setErrorMessage("");

    const { value } = event.target;

    setSelectedVariant(value);
  };

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuantity(value);
  };

  const selectVariantOption = productVariants?.map((variant: any) => (
    <option key={variant.node.id}>{variant.node.title}</option>
  ));

  const doesItemExistInCart = () => {
    const itemExistArray = cartState.items.filter(
      (item: any) => item.variantId === variantDetails.variantId
    );
    if (itemExistArray.length) return true;
    return false;
  };

  const handleAdd = () => {
    if (!variantDetails.availableForSale) return;

    if (productVariants.length > 1 && !selectedVariant) {
      setErrorMessage(missingVariant);
      return;
    }

    if (doesItemExistInCart()) {
      dispatch(
        changeQuantity({ id: variantDetails.variantId, quantity: quantity })
      );
    } else {
      dispatch(
        addItem({
          variantId: variantDetails.variantId,
          imgSrc: variantDetails.featuredImage,
          productTitle: productTitle,
          variantType: variantDetails.variantType,
          quantity: quantity,
          price: variantDetails.price,
          productId: productId,
        })
      );
    }

    history.push("/cart");
  };

  const displayPrice = productVariants && (
    <p
      className={`product-page-price ${
        !variantDetails.availableForSale && `line-through`
      }`}
    >
      {hasOnlyOneVariant()
        ? `$${variantDetails.price}`
        : selectedVariant && `$${variantDetails.price}`}
    </p>
  );

  return (
    <>
      <div className="product-page-container-info">
        <p className="product-page-info-title">{productTitle}</p>
        <p className="product-error-message">{errorMessage}</p>

        {displayPrice}
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
        <button
          className={`product-page-add-cart ${
            !variantDetails.availableForSale && `out-of-stock-cursor-default`
          }`}
          onClick={handleAdd}
        >
          {variantDetails.availableForSale ? `add to cart` : `sold out`}
        </button>
        <p className="product-page-description-label">product details</p>
        <p className="product-page-description">{productDesc}</p>
      </div>
    </>
  );
}

export default ProductDetails;
