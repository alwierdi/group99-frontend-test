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
  description,
}) {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const [isPhoneVisible, setPhoneVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  const togglePhoneNumber = () => {
    setPhoneVisible(!isPhoneVisible);
  };

  const hashPhoneNumber = (phoneNumber) => {
    return `${phoneNumber.slice(0, 4)} XXXX`;
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
            <div className="btnDescription">
              <button onClick={toggleDescription}>
                {isDescriptionVisible ? "Hide Description" : "See Description"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
