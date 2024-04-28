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

const useCreditAgreements = () => {
  const [productPrice, setProductPrice] = useState<number | string | null>(0);
  const [creditAgreements, setCreditAgreements] = useState<CreditAgreement[]>(
    []
  );
  const [instalmentFee, setInstalmentFee] = useState<string>("");
  const productPriceElement = document.getElementById("product-price");

  useEffect(() => {
    const price = productPriceElement && getProductPrice(productPriceElement);

    if (price) {
      setProductPrice(price);
    }
  }, [productPriceElement]);

  useEffect(() => {
    if (productPriceElement) {
      const handlePriceChange = () => {
        const newPrice = getProductPrice(productPriceElement);
        if (newPrice) {
          setProductPrice(newPrice);
        }
      };

      productPriceElement.addEventListener("change", handlePriceChange);
      return () => {
        productPriceElement?.removeEventListener("change", handlePriceChange);
      };
    }
  }, [productPriceElement]);

  useEffect(() => {
    if (!productPrice) {
      console.log("A price value wasn't found");
      return;
    }
    fetch(
      `http://localhost:8080/credit_agreements?totalWithTax=${productPrice}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCreditAgreements(data);
        // For a given total, it's being assumed that all the options are gonna have the same fee
        const fee = data[0].instalment_fee.string;
        setInstalmentFee(fee);
      });
  }, [productPrice]);

  return {
    creditAgreements,
    instalmentFee,
  };
};

export default useCreditAgreements;
