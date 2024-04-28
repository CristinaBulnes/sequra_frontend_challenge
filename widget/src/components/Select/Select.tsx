import { useState } from "react";
import "./Select.css";

type SelectOption = {
  id: string;
  value: string;
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
              <li className="dropdown-list-item" key={option.id}>
                <input
                  type="radio"
                  id={option.id}
                  value={option.value}
                  name={name}
                  onClick={() => onOptionClicked(option)}
                />
                <label htmlFor={option.id}>{option.label}</label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Select;
