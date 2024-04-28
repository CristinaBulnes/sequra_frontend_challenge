import { useState } from "react";
import InfoPopUp from "../InfoPopUp/InfoPopUp";
import Select from "../Select/Select";
import "./Widget.css";

const widgetTitle = "Pagalo en";
const moreInfoButton = "More info";
const financingOptions = [
  { id: "option1", value: "option1", label: "option1" },
  { id: "option2", value: "option2", label: "option2" },
];

function Widget() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const togglePopUp = () => setIsPopUpOpen(!isPopUpOpen);

  return (
    <>
      <div className="widget-container">
        <div className="widget-header">
          <div className="widget-header-title">{widgetTitle}</div>
          <button className="widget-moreInfo-button" onClick={togglePopUp}>
            {moreInfoButton}
          </button>
        </div>
        <div className="widget-select">
          <Select options={financingOptions} name="financingOptions" />
        </div>
      </div>
      {isPopUpOpen && <InfoPopUp instalmentFee={3} handleClose={togglePopUp} />}
    </>
  );
}

export default Widget;
