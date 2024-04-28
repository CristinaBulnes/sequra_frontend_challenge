import { createContext, useMemo, useState } from "react";

import useCreditAgreements, {
  CreditAgreement,
} from "../hooks/useCreditAgreements";

export interface CreditAgreementsContextType {
  creditAgreements: CreditAgreement[];
  instalmentFee: string;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
}

export const CreditAgreementsContext =
  createContext<CreditAgreementsContextType>({} as CreditAgreementsContextType);

type Props = {
  children: React.ReactNode;
};

const CreditAgreementsProvider = ({ children }: Props) => {
  const [price, setPrice] = useState<number>(0);

  const { creditAgreements, instalmentFee } = useCreditAgreements(price);

  const contextValue = useMemo(
    () => ({
      creditAgreements,
      instalmentFee,
      setPrice,
    }),
    [creditAgreements, instalmentFee]
  );

  return (
    <CreditAgreementsContext.Provider value={contextValue}>
      {children}
    </CreditAgreementsContext.Provider>
  );
};

export default CreditAgreementsProvider;
