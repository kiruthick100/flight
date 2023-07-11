import axios from "axios";
import React, { useEffect, useState } from "react";
import FlightImage from "../Image/Flight.jpeg";
import "./AvailableFlight.css";
const AvailableFlight = () => {
  const [state, setState] = useState();
  const [availableFlights, setAvailableFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getStateByIP() {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const state = data.region;
        console.log(`State: ${state}`);
        const response2 = await axios.get(
          `http://localhost:3000/api/AvailableFlight/${state}`
        );
        setAvailableFlights(response2.data);
        setIsLoading(false);
        setState(state);
      } catch (error) {
        console.error("Error occurred while retrieving location:", error);
      }
    }

    getStateByIP();
  }, []);

  const viewDetail = (value) => {
  };

  return (
    <div className="container">
      {isLoading ? (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        availableFlights.length > 0 &&
        availableFlights.map((value, index) => (
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
      )}
    </div>
  );
};

export default AvailableFlight;
