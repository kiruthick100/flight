import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FlightImage from "../Image/Flight.jpeg";
import './DisplayFlight.css';

const DisplayFlight = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const viewDetail = (value) => {
    navigate("/DetailView", { state: { value } });
  }
  return (
    <div className="FlightContainer">
      <div className="FlightListContainer">
        {  location.state.value.length>0 ? location.state.value.map((value, index) => (
          
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
        )):<div>"oops not available"</div>}
      </div>
    </div>
  );
}

export default DisplayFlight;
