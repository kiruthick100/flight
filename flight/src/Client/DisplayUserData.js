import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./DisplayUserData.css";

const DisplayUserData = () => {
  const navigator = useNavigate();
  const [Sate1, SetState] = useState([]);
  const [Distric1, SetDistric] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  const [formData, setFormData] = useState({
    From: '',
    To: '',
    Date: '',
    class:''
  });
  const createclass=["Business","secondary"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:3000/api/DisplayFlight/${formData.From}/${formData.To}/${formData.Date}`);
      navigator("/DisplayFlight", { state: { value: response.data ,class:formData.class}});
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
    
    } catch (error) {
      console.error('Error occurred while retrieving location:', error);
    }
  }
  
  getStateByIP();
  
},[])
useEffect(() => {
  const fetchData = async () => {
    try {
      const stateResponse = await axios.get('http://localhost:3000/api/GetState');
      console.log(stateResponse.data);
      SetState(stateResponse.data);

      const districtResponse = await axios.get('http://localhost:3000/api/GetDistrict');
      console.log(districtResponse.data);
      SetDistric(districtResponse.data);

      setIsLoading(false); // Set loading state to false after fetching data
    } 
   
    catch (error) {
      console.error(error);
    }
  }

  fetchData();
}, []);

  return (
    <div className="containe">
      <div className="fligh">
        <div className="airplan"></div>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          {/* <label htmlFor="fromInput">From</label>
          <input
            type="text"
            id="fromInput"
            name="From"
            value={formData.From}
            onChange={handleChange}
            required
          /> */}
              <select
                  name="From"
                  value={formData.From}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a state</option>
                  {Distric1.map((state, index) => (
                    <option key={index} value={state.Distric
                    }>
                      {state.Distric}
                    </option>
                  ))}
                </select>
        </div>
        <div className="field">
          <label htmlFor="toInput">To</label>
          {/* <input
            type="text"
            id="toInput"
            name="To"
            value={formData.To}
            onChange={handleChange}
            required
          /> */}
            <select
                  name="To"
                  value={formData.To}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a state</option>
                  {Distric1.map((state, index) => (
                    <option key={index} value={state.Distric
                    }>
                      {state.Distric}
                    </option>
                  ))}
                </select>
        </div>
        <select
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a state</option>
                  {createclass.map((state, index) => (
                    <option key={index} value={state
                    }>
                      {state}
                    </option>
                  ))}
                </select>
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
