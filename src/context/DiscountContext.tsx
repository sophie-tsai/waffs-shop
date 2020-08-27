import React, {
  createContext,
  useState,
  useEffect,
  SetStateAction,
} from "react";
import { discountCodes } from "../utils/discountCodesData";

const DiscountContext = createContext<any>([]);

function isActive(start: string, end: string) {
  const currentDate = new Date();
  const startDate = new Date(start);
  const endDate = new Date(end);

  if (startDate <= currentDate && currentDate <= endDate) {
    return true;
  }
  return false;
}

interface IDiscountCodeArray {
  title: string;
  start: string;
  end: string;
  desc: string;
  isActive: boolean;
}

function DiscountContextProvider(props: any) {
  const [discountCodesArray, setDiscountCodesArray] = useState<
    IDiscountCodeArray[] | []
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
    console.log(withCodeStatus);
    setDiscountCodesArray(withCodeStatus);
  }, []);

  return (
    <DiscountContext.Provider value={{ discountCodesArray }}>
      {props.children}
    </DiscountContext.Provider>
  );
}

export { DiscountContextProvider, DiscountContext };
