import { useState } from "react";
import "./InfoPopUp.css";

function InfoPopUp({ instalmentFee }: { instalmentFee: number }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const popUpTitle = "Fracciona tu pago";
  const brandName = "seQura";

  const instalmentDescription = `Ademas en el importe mostrado ya se incluye la cuota unica mensual de ${instalmentFee} /mes, por lo que no tendras ninguna sorpresa`;

  const infoItems = [
    {
      description: "Fracciona tu pago solo con un coste fijo por cuota.",
    },
    {
      description: "Ahora solo pagas la primera cuota.",
    },
    {
      description:
        "El resto de pagos se cargaran automaticamente a tu tarjeta.",
    },
  ];

  return (
    <div className="popup-container">
      <div className="popup-header">
        <div className="brand-logo">{brandName}</div>
        <div className="popup-title">{popUpTitle}</div>
      </div>
      <div className="popup-body">
        <ul className="list-container">
          {infoItems.map((item, index) => (
            <li className="list-item" key={index}>
              <div className="list-item-container">
                <div className="list-item-description">{item.description}</div>
                <div className="list-item-image"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="popup-footer">{instalmentDescription}</div>
    </div>
  );
}

export default InfoPopUp;
