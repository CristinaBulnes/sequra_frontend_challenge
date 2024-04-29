import { createContext, useEffect, useMemo, useState } from "react";

import useCreditAgreements, {
  CreditAgreement,
} from "../hooks/useCreditAgreements";
import { SelectOption } from "../components/Select/Select";

function getProductPrice(productPriceElement: HTMLElement) {
  const productPriceStringValue = productPriceElement.textContent?.replace(
    ",",
    "."
  );

  const productPrice =
    productPriceStringValue && parseFloat(productPriceStringValue);

  const productPriceInEurCents = productPrice && productPrice * 100;

  return productPriceInEurCents;
}

export interface CreditAgreementsContextType {
  creditAgreements: CreditAgreement[];
  instalmentFee: string;
  creditSelected: SelectOption | null;
  setCreditSelected: React.Dispatch<React.SetStateAction<SelectOption | null>>;
}

export const CreditAgreementsContext =
  createContext<CreditAgreementsContextType>({} as CreditAgreementsContextType);

type Props = {
  children: React.ReactNode;
};

const CreditAgreementsProvider = ({ children }: Props) => {
  const [price, setPrice] = useState<number>(0);
  const [creditSelected, setCreditSelected] = useState<SelectOption | null>(
    null
  );

  const updatePrice = () => {
    const productPriceElement = document.getElementById("product-price");

    const price = productPriceElement && getProductPrice(productPriceElement);

    if (price) {
      setPrice(price);
    }

    // On price updated, reset the selected option value
    setCreditSelected(null);
  };

  useEffect(() => {
    Array.from(document.getElementsByClassName("product-capacity")).map(
      (element) => element.addEventListener("click", updatePrice)
    );

    return () => {
      Array.from(document.getElementsByClassName("product-capacity")).map(
        (element) => element.removeEventListener("click", updatePrice)
      );
    };
  }, []);

  const { creditAgreements, instalmentFee } = useCreditAgreements(price);

  const contextValue = useMemo(
    () => ({
      creditAgreements,
      instalmentFee,
      creditSelected,
      setCreditSelected,
    }),
    [creditAgreements, creditSelected, instalmentFee]
  );

  return (
    <CreditAgreementsContext.Provider value={contextValue}>
      {children}
    </CreditAgreementsContext.Provider>
  );
};

export default CreditAgreementsProvider;
