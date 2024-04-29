import { useState } from "react";
import InfoPopUp from "../InfoPopUp/InfoPopUp";
import Select from "../Select/Select";
import "./Widget.css";

const widgetTitle = "Pagalo en";
const moreInfoButton = "More info";

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
          <Select name="financialOptions" />
        </div>
      </div>
      {isPopUpOpen && <InfoPopUp handleClose={togglePopUp} />}
    </>
  );
}

export default Widget;
