import { useEffect, useState } from "react";
import getProductPrice from "../utils/getProductPrice";

const usePrice = () => {
  const [productPrice, setProductPrice] = useState<number>(15000);

  useEffect(() => {
    const price = getProductPrice();
    setProductPrice(price);

    const updatePrice = () => {
      const newPrice = getProductPrice();

      setProductPrice(newPrice);
    };

    const productCapacityElements =
      document.getElementsByClassName("product-capacity");

    Array.from(productCapacityElements).forEach((element) => {
      element.addEventListener("click", updatePrice);
    });

    return () => {
      Array.from(productCapacityElements).forEach((element) => {
        element.removeEventListener("click", updatePrice);
      });
    };
  }, []);
  return { productPrice };
};

export default usePrice;
