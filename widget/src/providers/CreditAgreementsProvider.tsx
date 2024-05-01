import { createContext, useEffect, useMemo, useState } from "react";

import useCreditAgreements, {
  CreditAgreement,
} from "../hooks/useCreditAgreements";
import { SelectOption } from "../components/Select/Select";
import usePrice from "../hooks/usePrice";

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
  const [creditSelected, setCreditSelected] = useState<SelectOption | null>(
    null
  );
  const { productPrice } = usePrice();
  const { creditAgreements, instalmentFee } = useCreditAgreements(productPrice);

  useEffect(() => {
    setCreditSelected(null);
  }, [productPrice]);

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
