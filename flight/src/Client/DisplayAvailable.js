import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const DisplayAvailable=(prop)=>
{
    var State=""
   
    const [AvailableFlights,SetAvailableFlight]=useState([])

    useEffect(()=>
    {
        const Available=async()=>
        {
    //         const response2= await axios.get(`http://localhost:3000/api/AvailableFlight/${prop.State}`)
    //   SetAvailableFlight(response2.data);
    //   console.log("sfrg",AvailableFlights);
        }
        Available();
        
        Available();
    },[State])
    useEffect(()=>
    {
        
        State=prop.State;
    })
  
    return(
        <>
        {prop.State}
        </>
    )
}
export default DisplayAvailable;