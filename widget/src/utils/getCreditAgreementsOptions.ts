import {
  CreditAgreement,
  CreditAgreementDTO,
} from "../hooks/useCreditAgreements";

const getCreditAgreementsOptions = (
  creditAgreements: CreditAgreementDTO[]
): CreditAgreement[] => {
  return creditAgreements.map((creditAgreement) => {
    const value = creditAgreement.instalment_count;
    const label = `${creditAgreement.instalment_count} cuotas de ${creditAgreement.instalment_total.string}/mes`;
    return { value, label };
  });
};

export default getCreditAgreementsOptions;
