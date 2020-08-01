import React, { createContext, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../graphql/product-queries";

const QueryContext = createContext<any>({});

function QueryContextProvider(props: any) {
  const [shopProductDisplay, setShopProductDisplay] = useState([]);

  const {
    loading: inventoryLoading,
    data: inventoryData,
    error: inventoryError,
  } = useQuery(GET_PRODUCTS);

  useEffect(() => {
    if (!inventoryError && inventoryData) {
      const { edges: productNodes } = inventoryData.shop.products;
      setShopProductDisplay(productNodes);
    }
  }, [inventoryLoading]);

  return (
    <QueryContext.Provider value={{ shopProductDisplay }}>
      {props.children}
    </QueryContext.Provider>
  );
}

export { QueryContextProvider, QueryContext };
