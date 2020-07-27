const cartState = {
  items: [],
};

type AddItemProps = {
  id: string;
  imgSrc: string;
  productTitle: string | undefined;
  type: string;
  quantity: string;
  price: string;
};

export function addItem(props: AddItemProps) {
  const { id, imgSrc, productTitle, type, quantity, price } = props;
  return {
    type: "ADD_ITEM",
    payload: { id, imgSrc, productTitle, type, quantity, price },
  };
}

export function deleteItem(id: string) {
  return {
    type: "DETELE_ITEM",
    payload: id,
  };
}

export default function cartReducer(
  cart = cartState,
  action: { type: string; payload: string }
) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...cart,
        items: [...cart.items, action.payload],
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
