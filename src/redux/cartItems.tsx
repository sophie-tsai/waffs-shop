import { isTypeNode } from "graphql";

const cartState = {
  items: [],
};

type AddItemProps = {
  variantId: string;
  imgSrc: string;
  productTitle: string | undefined;
  type: string;
  quantity: string;
  price: string;
};

export function addItem(props: AddItemProps) {
  const { variantId, imgSrc, productTitle, type, quantity, price } = props;
  return {
    type: "ADD_ITEM",
    payload: { variantId, imgSrc, productTitle, type, quantity, price },
  };
}

export function deleteItem(id: string) {
  return {
    type: "DETELE_ITEM",
    payload: id,
  };
}

type ChangeQuantityProps = {
  id: string;
  quantity: string;
};

export function changeQuantity(props: ChangeQuantityProps) {
  const { id, quantity } = props;
  return {
    type: "CHANGE_QUANTITY",
    payload: { id, quantity },
  };
}

export default function cartReducer(
  cart = cartState,
  action: {
    type: string;
    payload: any;
  }
) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...cart,
        items: [...cart.items, action.payload],
      };
    case "CHANGE_QUANTITY":
      const productToBeUpdated = cart.items.filter(
        (item: {
          variant: string;
          imgSrc: string;
          productTitle: string;
          type: string;
          quantity: string;
          variantId: string;
        }) => item.variantId === action.payload.id
      );

      const updatedProduct = (
        productToBeUpdated: {
          variant: string;
          imgSrc: string;
          productTitle: string;
          type: string;
          quantity: string;
          variantId: string;
        },
        quantity: string
      ) => {
        const update = {
          ...productToBeUpdated,
          quantity: parseInt(productToBeUpdated.quantity) + parseInt(quantity),
        };
        return update;
      };

      const productsNotToBeUpdated = cart.items.filter(
        (item: {
          variant: string;
          imgSrc: string;
          productTitle: string;
          type: string;
          quantity: string;
          variantId: string;
        }) => item.variantId !== action.payload.id
      );
      return {
        ...cart,
        items: [
          ...productsNotToBeUpdated,
          updatedProduct(productToBeUpdated[0], action.payload.quantity),
        ],
      };
    case "DELETE_ITEM":
      const updatedCart = cart.items.filter((item) => item !== action.payload);
      return {
        ...cart,
        items: updatedCart,
      };
    default:
      return cart;
  }
}
