import { useContext, useState } from "react";
import InfoPopUp from "../InfoPopUp/InfoPopUp";
import Select from "../Select/Select";
import "./Widget.css";
import { CreditAgreementsContext } from "../../providers/CreditAgreementsProvider";

const widgetTitle = "Pagalo en";
const moreInfoButton = "More info";

function Widget() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const { creditAgreements } = useContext(CreditAgreementsContext);

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
          <Select name="financialOptions" options={creditAgreements} />
        </div>
      </div>
      {isPopUpOpen && <InfoPopUp handleClose={togglePopUp} />}
    </>
  );
}

export default Widget;
