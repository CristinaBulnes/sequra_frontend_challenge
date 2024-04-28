import { useState } from "react";
import "./Select.css";

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

type SelectOption = {
  value: number;
  label: string;
};

type SelectProps = {
  options: SelectOption[];
  name: string;
};

function Select({ options, name }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null
  );

  const toggleDropdown = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: SelectOption) => {
    setSelectedOption(value);
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
        onClick={toggleDropdown}
      >
        <span className="selected-value">
          {selectedOption?.label || selectDefaultOption}
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
              <li className="dropdown-list-item" key={option.value}>
                <input
                  type="radio"
                  id={option.label}
                  value={option.value}
                  name={name}
                  onClick={() => onOptionClicked(option)}
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
