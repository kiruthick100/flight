import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FlightImage from "../Image/Flight.jpeg";
import './DisplayFlight.css';

const DisplayFlight = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
console.log("vcbf",location.state.class);
const class1=location.state.class
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  const viewDetail = (value) => {
    navigate("/DetailView", { state: {value: value ,class:class1} });
                              
  }

  return (
    <div className="FlightContainer">
      {isLoading ? (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <div className="FlightListContainer">
          {location.state.value.length > 0 ? (
            location.state.value.map((value, index) => (
              <div
                className="FlightList"
                key={index}
                onClick={() => viewDetail(value)}
              >
                <img src={FlightImage} alt="Flight" className="FlightImage" />
                <div className="FlightInfo">
                  <div className="FlightInfoHeader">{value.To}</div>
                  <div className="FlightInfoItem">{value.From}</div>
                  <div className="FlightInfoItem">{value.Date}</div>
                  <div className="FlightInfoItem">{value.Time}</div>
                </div>
              </div>
            ))
          ) : (
            <div>"Oops, not available"</div>
          )}
        </div>
      )}
    </div>
  );
}

export default DisplayFlight;
