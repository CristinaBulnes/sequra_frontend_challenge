import { useContext, useState } from "react";
import InfoPopUp from "../InfoPopUp/InfoPopUp";
import Select from "../Select/Select";
import "./Widget.css";
import { CreditAgreementsContext } from "../../providers/CreditAgreementsProvider";
import { CreditAgreement } from "../../hooks/useCreditAgreements";

const widgetTitle = "Pagalo en";
const moreInfoButton = "More info";

const getCreditAgreementMessage = (creditAgreement: CreditAgreement) => {
  const value = creditAgreement.instalment_count;
  const label = `${creditAgreement.instalment_count} cuotas de ${creditAgreement.instalment_total.string}/mes`;
  return { value, label };
};

function Widget() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const { creditAgreements } = useContext(CreditAgreementsContext);
  const financialOptions = creditAgreements.map((creditAgreement) =>
    getCreditAgreementMessage(creditAgreement)
  );

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
          <Select options={financialOptions} name="financialOptions" />
        </div>
      </div>
      {isPopUpOpen && <InfoPopUp handleClose={togglePopUp} />}
    </>
  );
}

export default Widget;
