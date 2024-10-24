import { useState } from "react";
import "./styles.css";

export default function ListingAd({ pic, title, address, description }) {

  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  
  const toggleDesctiption = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  }

  return (
    <div className="App">
      <img className="mainPic" width="300" height="500" src={pic} alt={title} />
      <div className="mainContent">
        <h1>{title}</h1>
        <p className="address">{address}</p>
        <button onClick={toggleDesctiption}>
          {isDescriptionVisible ? 'Hide Description' : 'See Description'}
        </button>
        {isDescriptionVisible && <p className="description">{description}</p>}
      </div>
    </div>
  );
}
