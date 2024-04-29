import { useContext, useEffect, useState } from "react";
import "./Select.css";
import { CreditAgreementsContext } from "../../providers/CreditAgreementsProvider";
import { CreditAgreement } from "../../hooks/useCreditAgreements";

const trackOptionChangeEvent = (value: number) => {
  const data = {
    context: "checkoutWidget",
    type: "simulatorInstalmentChanged",
    selectedInstalment: value,
  };

  fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response;
    })
    .then((data) => {
      console.log("Response:", data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

const getCreditAgreementMessage = (creditAgreement: CreditAgreement) => {
  const value = creditAgreement.instalment_count;
  const label = `${creditAgreement.instalment_count} cuotas de ${creditAgreement.instalment_total.string}/mes`;
  return { value, label };
};

export type SelectOption = {
  value: number;
  label: string;
};

type SelectProps = {
  name: string;
};

function Select({ name }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<SelectOption[]>([]);

  const { creditAgreements, creditSelected, setCreditSelected } = useContext(
    CreditAgreementsContext
  );

  useEffect(() => {
    const financialOptions = creditAgreements.map((creditAgreement) =>
      getCreditAgreementMessage(creditAgreement)
    );
    setOptions(financialOptions);
  }, [creditAgreements]);

  window.addEventListener("click", (e) => {
    e.stopPropagation();
    setIsOpen(false);
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownClicked = () => {
    toggleDropdown();
  };

  const onOptionClicked = (value: SelectOption) => {
    setCreditSelected(value);
    trackOptionChangeEvent(value.value);
    setIsOpen(false);
  };

  const selectDefaultOption = "Select one option";

  return (
    <div className="dropdown-container">
      <div
        className="dropdown-button"
        role="combobox"
        aria-labelledby="select button"
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-controls="select-dropdown"
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          e.stopPropagation();
          handleDropdownClicked();
        }}
      >
        <span className="selected-value">
          {creditSelected?.label || selectDefaultOption}
        </span>
        <span className="arrow-icon-container">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 10L12 15L17 10"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
      {isOpen && (
        <div className="dropdown-list-container">
          <ul className="dropdown-list" role="listbox">
            {options.map((option) => (
              <li
                className="dropdown-list-item"
                key={option.value}
                onClick={(e) => {
                  e.stopPropagation();
                  onOptionClicked(option);
                }}
              >
                <input
                  type="radio"
                  id={option.label}
                  value={option.value}
                  name={name}
                />
                <label htmlFor={option.label}>{option.label}</label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Select;
