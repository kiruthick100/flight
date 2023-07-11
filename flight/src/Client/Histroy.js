import axios from "axios";
import React, { useEffect, useState } from "react";
import FlightImage from "../Image/Flight.jpeg";
import "./Histroy.css"
const History = () => {
  const LoginId = localStorage.getItem("LoginId");
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState();

  useEffect(() => {
    const getHistory = async () => {
      try {
        const response1 = await fetch("https://ipapi.co/json/");
        const data = await response1.json();
        const state = data.region;
        console.log(`State: ${state}`);
        const response = await axios.get(
          `http://localhost:3000/api/History/${LoginId}`
        );
        setHistory(response.data);
        setIsLoading(false);
        setState(state);
      } catch (error) {
        console.error("Error occurred while retrieving history:", error);
      }
    };

    getHistory();
  }, []);

  return (
    <div className="container">
      {isLoading ? (
      <div className="loading-overlay">
      <div className="loading-spinner"></div>
    </div>
      ) : (
        history.map((value, index) => (
          <div className="FlightList" key={index}>
            <img src={FlightImage} alt="Flight" className="FlightImage" />
            <div className="FlightInfo">
              <div className="FlightInfoHeader">{value.Name}</div>
              <div className="FlightInfoItem">{value.Age}</div>
              <div className="FlightInfoItem">{value.Address}</div>
              <div className="FlightInfoItem">{value.Adharcard}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default History;
