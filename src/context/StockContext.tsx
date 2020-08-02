import React, { createContext, useState, useContext, useEffect } from "react";
import { QueryContext } from "./QueryContext";

const StockContext = createContext<any>({});

function StockContextProvider(props: any) {
  // const stockSets = new Set();
  const [stockSet, setStockSet] = useState(new Set());
  const [counter, setCounter] = useState(0);
  //   const [outOfStockProducts, setOutOfStockProducts] = useState<string[]>([]);

  const { shopProductDisplay } = useContext(QueryContext);
  console.log("QC", shopProductDisplay);

  useEffect(() => {
    const unavailable = new Set();
    if (shopProductDisplay.length > 0) {
      for (let product of shopProductDisplay) {
        let isAdded: boolean = false;
        const productVariants = product.node.variants.edges;
        for (let variant of productVariants) {
          if (variant.node.availableForSale) {
            isAdded = true;
            break;
          }
        }
        if (!isAdded) {
          unavailable.add(product.node.id);
        }
      }
      setStockSet(unavailable);
      setCounter((counter) => counter + 1);
    }
  }, [shopProductDisplay]);

  return (
    <StockContext.Provider value={{ stockSet, counter }}>
      {props.children}
    </StockContext.Provider>
  );
}

export { StockContext, StockContextProvider };
