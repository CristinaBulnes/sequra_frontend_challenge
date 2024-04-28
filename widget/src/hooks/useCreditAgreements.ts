import { useEffect, useState } from "react";

type ValueWithString = {
  value: number;
  string: string;
};

export type CreditAgreement = {
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

const useCreditAgreements = () => {
  const [creditAgreements, setCreditAgreements] = useState<CreditAgreement[]>(
    []
  );
  const [instalmentFee, setInstalmentFee] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:8080/credit_agreements?totalWithTax=15000")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCreditAgreements(data);
        // For a given total, it's being assumed that all the options are gonna have the same fee
        const fee = data[0].instalment_fee.string;
        setInstalmentFee(fee);
      });
  }, []);

  return {
    creditAgreements,
    instalmentFee,
  };
};

export default useCreditAgreements;