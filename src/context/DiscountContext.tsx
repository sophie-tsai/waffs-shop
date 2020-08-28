import React, { createContext, useState, useEffect } from "react";
import { discountCodes } from "../utils/discountCodesData";

const DiscountContext = createContext<any>([]);

function isActive(start: string, end: string) {
  const currentDate = new Date();
  const startDate = new Date(start);
  const endDate = new Date(end);

  // if the current date is between the start and end date, then it's active
  return startDate <= currentDate && currentDate <= endDate;
}

function DiscountContextProvider(props: any) {
  const [activeDiscountsArray, setActiveDiscountsArray] = useState<
    string[] | []
  >([]);

  useEffect(() => {
    const withCodeStatus = discountCodes.map((code) => {
      if (isActive(code.start, code.end)) {
        return {
          ...code,
          isActive: true,
        };
      }
      return {
        ...code,
        isActive: false,
      };
    });

    const activeDiscountsCodes = withCodeStatus.filter((code) => code.isActive);

    const discountCopys = activeDiscountsCodes.map(
      (code: { desc: string; title: string; end: string }[] | any) => {
        return `${code.desc}, with the code ${code.title}. ends ${code.end}`;
      }
    );
    setActiveDiscountsArray(discountCopys);
  }, []);

  return (
    <DiscountContext.Provider value={activeDiscountsArray}>
      {props.children}
    </DiscountContext.Provider>
  );
}

export { DiscountContextProvider, DiscountContext };
