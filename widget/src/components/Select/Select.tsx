import "./Select.css";
import useDropdown from "../../hooks/useDropdown";
import { useContext } from "react";
import { CreditAgreementsContext } from "../../providers/CreditAgreementsProvider";

export type SelectOption = {
  value: number;
  label: string;
};

type SelectProps = {
  name: string;
  options: SelectOption[];
};

function Select({ name, options }: SelectProps) {
  const { isOpen, toggleDropdown, onOptionClicked } = useDropdown();
  const { creditSelected } = useContext(CreditAgreementsContext);

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
          toggleDropdown();
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
