import React, { createContext, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_DISCOUNTS } from "../graphql/discount-queries";

const DiscountContext = createContext<any>({});

function DiscountContextProvider(props: any) {
  const [discountCodesArray, setDiscountCodesArray] = useState([]);

  const {
    loading: discountCodeLoading,
    data: discountCodeData,
    error: discountCodeError,
  } = useQuery(GET_DISCOUNTS);

  console.log("context", discountCodeData);
  console.log("error", discountCodeError);
  useEffect(() => {
    if (!discountCodeError && discountCodeData) {
      //   const {
      //     edges: discountCodeNodes,
      //   } = discountCodeData.data.codeDiscountNodes.edges;
      //   setDiscountCodesArray(discountCodeNodes);
      //   console.log("context", discountCodeData);
    }
  }, [discountCodeLoading]);

  return (
    <DiscountContext.Provider value={{ discountCodesArray }}>
      {props.children}
    </DiscountContext.Provider>
  );
}

export { DiscountContextProvider, DiscountContext };
