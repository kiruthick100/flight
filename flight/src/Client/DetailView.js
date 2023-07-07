import React from "react";
import Flight from "../Image/Flight.jpeg"
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import PasangerDetails from "./PasangerDetails";
import FlightSeat from './FlightSeat';
// import "./DetailView.css";
import { useState } from "react";
const DetailView=()=>
{
    const[pasangerCount,setpasangerCount]=useState(0);
    const location=useLocation();
    const navigator=useNavigate();
    console.log(location)
    function Check(e){
        if(location.state.value.SeatAvailable-e.target.value<0 )
        {
            alert("less the ")
            setpasangerCount(location.state.value.SeatAvailable);
        }
        else{
            setpasangerCount(e.target.value);
        }
    }
    
    return(
        <>
        <div>
        <center>
            <div>
            <img  style={{height:"350px"}} src={Flight}/>
            </div>
       <h1> {location.state.value.From}</h1>
        <h1>{location.state.value.To}</h1>
        <h1>{location.state.value.Date}</h1>
       <h1> {location.state.value.Time}</h1>
     
      
       <FlightSeat value={location.state.value}/>
      
        </center>
        </div>
        
        </>
    )
}
export default DetailView;