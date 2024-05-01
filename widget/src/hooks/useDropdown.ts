import { useContext, useEffect, useState } from "react";
import { CreditAgreementsContext } from "../providers/CreditAgreementsProvider";
import { SelectOption } from "../components/Select/Select";
import trackOptionChangeEvent from "../utils/trackOptionChangeEvent";

const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setCreditSelected } = useContext(CreditAgreementsContext);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (value: SelectOption) => {
    setCreditSelected(value);
    trackOptionChangeEvent(value.value);
    setIsOpen(false);
  };

  useEffect(() => {
    const closeSelect = (e: MouseEvent) => {
      e.stopPropagation();
      setIsOpen(false);
    };

    document.addEventListener("click", closeSelect);

    return () => {
      document.removeEventListener("click", closeSelect);
    };
  }, []);

  return { isOpen, toggleDropdown, onOptionClicked };
};

export default useDropdown;
