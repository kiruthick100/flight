import axios from "axios";
import React from "react";
import FlightImage from "../Image/Flight.jpeg";
import { useEffect,useState } from "react";
const AvailableFlight=()=>
{
    const [State,SetState]=useState();
    const [AvailableFlights,SetAvailableFlight]=useState([])

    useEffect(()=>
{
  async function getStateByIP() {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      const state = data.region;
      console.log(`State: ${state}`);
      const response2= await axios.get(`http://localhost:3000/api/AvailableFlight/${state}`)
      SetAvailableFlight(response2.data);
      console.log("sfrg",AvailableFlights);
      SetState(state);
      
     } catch (error) {
      console.error('Error occurred while retrieving location:', error);
    }
  }
  
  getStateByIP();
  

  
},[State])
const viewDetail=(value)=>
{

}
    return(
       
        <>
         {  AvailableFlights.length>0 && AvailableFlights.map((value, index) => (
          
          <div className="FlightList" key={index} onClick={() => viewDetail(value)}>
            <img src={FlightImage} alt="Flight" className="FlightImage" />
            <div className="FlightInfo">
              <div className="FlightInfoHeader">{value.To}</div>
              <div className="FlightInfoItem">{value.From}</div>
              <div className="FlightInfoItem">{value.Date}</div>
             
              <div className="FlightInfoItem">{value.Time}</div>
            </div>
          </div>
        ))}
        </>
    )
}
export default AvailableFlight;