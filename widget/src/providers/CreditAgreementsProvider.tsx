import { createContext, useMemo } from "react";

import useCreditAgreements, {
  CreditAgreement,
} from "../hooks/useCreditAgreements";

export interface CreditAgreementsContextType {
  creditAgreements: CreditAgreement[];
  instalmentFee: string;
}

export const CreditAgreementsContext =
  createContext<CreditAgreementsContextType>({} as CreditAgreementsContextType);

type Props = {
  children: React.ReactNode;
};

const CreditAgreementsProvider = ({ children }: Props) => {
  const { creditAgreements, instalmentFee } = useCreditAgreements();

  const contextValue = useMemo(
    () => ({
      creditAgreements,
      instalmentFee,
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
