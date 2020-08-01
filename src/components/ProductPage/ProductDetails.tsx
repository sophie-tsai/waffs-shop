import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { addItem, changeQuantity } from "../../redux/cartItems";
import { useHistory } from "react-router-dom";

type ProductDetailsProps = {
  productTitle: string | undefined;
  productVariants:
    | { node: { price: string; image: { originalSrc: string } } }[]
    | any;
  price: string;
  singleVariantPrice: string | undefined;
  setVariant: Dispatch<SetStateAction<string>>;
  setVariantId: Dispatch<SetStateAction<string>>;
  productDescription: string | undefined;
  featuredImage: string;
  id: string;
  variantId: string;
  variant: string;
  altText: string | undefined;
};

function ProductDetails(props: any) {
  const [quantity, setQuantity] = useState("1");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const missingVariant: string = "select a style";
  const {
    setSelectedVariant,
    productTitle,
    productVariants,
    price,
    singleVariantPrice,
    // setVariant,
    // setVariantId,
    productDesc,
    featuredImage,
    variantId,
    variant,
    altText,
  } = props;
  // console.log("props", props);

  const handleDropDown = (event: ChangeEvent<HTMLSelectElement>) => {
    if (errorMessage) setErrorMessage("");

    const { value } = event.target;
    // setVariant(value);
    setSelectedVariant(value);
  };

  //////////////////////////
  const dispatch = useDispatch();
  const cartState = useSelector((state: RootStateOrAny) => state.cart);

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuantity(value);
  };

  const selectVariantOption = productVariants?.map((variant: any) => (
    <option key={variant.node.id}>{variant.node.title}</option>
  ));

  const doesItemExistInCart = () => {
    const itemExistArray = cartState.items.filter(
      (item: any) => item.variantId === variantId
    );
    if (itemExistArray.length) return true;
    return false;
  };

  const handleAdd = () => {
    if (productVariants.length > 1 && !variant) {
      setErrorMessage(missingVariant);
      return;
    }

    if (doesItemExistInCart()) {
      dispatch(changeQuantity({ id: variantId, quantity: quantity }));
    } else {
      dispatch(
        addItem({
          variantId: variantId,
          imgSrc: featuredImage,
          productTitle: productTitle,
          type: variant,
          quantity: quantity,
          price: singleVariantPrice || price,
          altText: altText,
        })
      );
    }

    history.push("/cart");
  };

  const displayPrice = productVariants && (
    <p className="product-page-price">
      {productVariants.length > 1
        ? price && `$${price}`
        : `$${singleVariantPrice}`}
    </p>
  );

  // useEffect(() => {
  //   if (productVariants && productVariants.length > 1) {
  //     setVariantId(productVariants[0].node.id);
  //   }

  //   if (productVariants && productVariants.length === 1) {
  //     setVariantId(productVariants[0].node.id);
  //   }
  // }, [productVariants]);

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
        <button className="product-page-add-cart" onClick={handleAdd}>
          add to cart
        </button>
        <p className="product-page-description-label">product details</p>
        <p className="product-page-description">{productDesc}</p>
      </div>
    </>
  );
}

export default ProductDetails;
