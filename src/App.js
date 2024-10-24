import { useState } from "react";
import "./styles.css";

export default function ListingAd({
  pic,
  title,
  address,
  project_type,
  year,
  ownership_type,
  psf_min,
  psf_max,
  subprice_label,
  availabilities_label,
  phone_number,
  owner_number,
  agent_name,
  agent_number,
  description,
}) {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const [isPhoneVisible, setPhoneVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  const togglePhoneNumber = (number) => {
    setPhoneVisible(!isPhoneVisible);
  };

  const hashPhoneNumber = (phoneNumber) => {
    if (phoneNumber) {
      return `${phoneNumber.slice(0, 4)} XXXX`;
    } else {
      return "N/A";
    }
  };

  return (
    <div className="App">
      <div className="card-container">
        <div className="card">
          <div className="back3d"></div>
          <div className="label">Launching Soon</div>
          <div className="img-container">
            <div className="overlay"></div>
            <img
              className="mainPic"
              width="300"
              height="500"
              src={pic}
              alt={title}
            />
          </div>
          <div className="mainContent">
            <div className="title-content">
              <img className="building-icon" src="/building-icon.svg" />
              <div className="content">
                <h1>{title}</h1>
                <p className="address">{address}</p>
              </div>
              <p>
                {project_type} · {year} · {ownership_type}
              </p>
              <p>{availabilities_label}</p>
            </div>
            <div className="price-section">
              <p className="price-range">
                ${psf_min} - ${psf_max} psf
              </p>
              <p className="sub-price">{subprice_label}</p>
            </div>
          </div>
          <div className="description-section">
            {isDescriptionVisible && (
              <p className="description">{description}</p>
            )}
            <div className="contact-section">
              <p>
                Please call{" "}
                <span
                  className="phone-number"
                  onClick={() => togglePhoneNumber(agent_number)}
                >
                  {isPhoneVisible
                    ? agent_number
                    : hashPhoneNumber(agent_number)}
                </span>{" "}
                (CEA No: {agent_number}) or the owner{" "}
                <span
                  className="phone-number"
                  onClick={() => togglePhoneNumber(owner_number)}
                >
                  {isPhoneVisible
                    ? owner_number
                    : hashPhoneNumber(owner_number)}
                </span>{" "}
                to arrange for a viewing.
              </p>
              <div className="btnDescription">
                <button onClick={toggleDescription}>
                  {isDescriptionVisible
                    ? "Hide Description"
                    : "See Description"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
