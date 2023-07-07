import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./DisplayUserData.css";

const DisplayUserData = () => {
  const navigator = useNavigate();

  const [formData, setFormData] = useState({
    From: '',
    To: '',
    Date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:3000/api/DisplayFlight/${formData.From}/${formData.To}/${formData.Date}`);
      navigator("/DisplayFlight", { state: { value: response.data } });
    } catch (error) {
      console.error(error);
    }
  };
useEffect(()=>
{
  async function getStateByIP() {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      const state = data.region;
      console.log(`State: ${state}`);
      // You can perform further actions with the state information here
    } catch (error) {
      console.error('Error occurred while retrieving location:', error);
    }
  }
  
  getStateByIP();
  
},[])
  return (
    <div className="container">
      <div className="flight">
        <div className="airplane"></div>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="fromInput">From</label>
          <input
            type="text"
            id="fromInput"
            name="From"
            value={formData.From}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="toInput">To</label>
          <input
            type="text"
            id="toInput"
            name="To"
            value={formData.To}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="dateInput">Date</label>
          <input
            type="date"
            id="dateInput"
            name="Date"
            value={formData.Date}
            onChange={handleChange}
            required
          />
        </div>
        <button className="submit-button" type="submit">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
}

export default DisplayUserData;
