import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import getCreditAgreementsOptions from "../utils/getCreditAgreementsOptions";

type ValueWithString = {
  value: number;
  string: string;
};

export type CreditAgreementDTO = {
  apr: ValueWithString;
  cost_of_credit: ValueWithString;
  cost_of_credit_pct: ValueWithString;
  grand_total: ValueWithString;
  instalment_amount: ValueWithString;
  instalment_count: number;
  instalment_fee: ValueWithString;
  instalment_total: ValueWithString;
  max_financed_amount: ValueWithString;
  total_with_tax: ValueWithString;
};

export type CreditAgreement = {
  value: number;
  label: string;
};

const useCreditAgreements = (price: number) => {
  const [creditAgreements, setCreditAgreements] = useState<CreditAgreement[]>(
    []
  );
  const [instalmentFee, setInstalmentFee] = useState<string>("");

  const getCreditAgreements = async (price: number) => {
    try {
      if (!price) {
        throw new Error("No price found");
      }

      const response = await fetch(
        `${BASE_URL}/credit_agreements?totalWithTax=${price}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      const formatData = getCreditAgreementsOptions(data);
      setCreditAgreements(formatData);

      const fee = data[0].instalment_fee.string;
      setInstalmentFee(fee);
    } catch (error) {
      throw new Error("There was an error");
    }
  };

  useEffect(() => {
    getCreditAgreements(price);
  }, [price]);

  return {
    creditAgreements,
    instalmentFee,
  };
};

export default useCreditAgreements;
