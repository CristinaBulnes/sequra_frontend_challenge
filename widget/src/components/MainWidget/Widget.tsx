import InfoPopUp from "../InfoPopUp/InfoPopUp";
import Select from "../Select/Select";
import "./Widget.css";

function Widget() {
  const widgetTitle = "Pagalo en";
  const moreInfoButton = "More info";
  const financingOptions = [
    { id: "option1", value: "option1", label: "option1" },
    { id: "option2", value: "option2", label: "option2" },
  ];
  return (
    <>
      <div className="widget-container">
        <div className="widget-header">
          <div className="widget-header-title">{widgetTitle}</div>
          <button className="widget-moreInfo-button">{moreInfoButton}</button>
        </div>
        <div className="widget-select">
          <Select options={financingOptions} name="financingOptions" />
        </div>
      </div>
      <InfoPopUp instalmentFee={3} />
    </>
  );
}

export default Widget;
