const cartState = {
  items: [],
};

type AddItemProps = {
  variantId: string;
  imgSrc: string;
  productTitle: string | undefined;
  variantType: string;
  quantity: string;
  price: string;
  productId: string;
  // altText: string | undefined;
};

export function addItem(props: AddItemProps) {
  const {
    variantId,
    imgSrc,
    productTitle,
    variantType,
    quantity,
    price,
    productId,
    // altText,
  } = props;
  return {
    type: "ADD_ITEM",
    payload: {
      variantId,
      imgSrc,
      productTitle,
      variantType,
      quantity,
      price,
      productId,
      // altText,
    },
  };
}

export function deleteItem(id: string) {
  return {
    type: "DELETE_ITEM",
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
      //
      const updatedQuantityCart = cart.items.map(
        (item: { quantity: string; variantId: string }) => {
          if (item.variantId === action.payload.id) {
            return {
              ...item,
              quantity:
                parseInt(item.quantity) + parseInt(action.payload.quantity),
            };
          }
          return item;
        }
      );

      //
      return {
        ...cart,
        items: updatedQuantityCart,
      };
    case "DELETE_ITEM":
      const updatedCart = cart.items.filter(
        (item: { variantId: string }) => item.variantId !== action.payload
      );
      return {
        ...cart,
        items: updatedCart,
      };
    default:
      return cart;
  }
}
