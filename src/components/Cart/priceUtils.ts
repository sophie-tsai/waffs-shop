/* Display in USD for all*/

export const getDisplayPrice = (price: any) => {
  return price ? `$${price}` : ``;
};

export const getDisplayTotal = (price: string, quantity: string) => {
  const subtotal: number = parseFloat(price) * parseFloat(quantity);
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(subtotal);
};
