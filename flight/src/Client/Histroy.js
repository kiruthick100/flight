import axios from "axios";
import React, { useEffect, useState } from "react";
import FlightImage from "../Image/Flight.jpeg"
const History=()=>
{
    const LoginId=localStorage.getItem("LoginId")
    console.log(LoginId);
    const [History1,SetHistory]=useState([])
    var temp=0;
    useEffect(()=>
    {
        const getHistory=async()=>
        {
            const response=await axios.get(`http://localhost:3000/api/History/${LoginId}`)
             SetHistory(response.data);

        }
        getHistory()
        
        
    },[])
    temp=1;
    return(
        <>
        {
            History1.map((value,index)=>
             <div className="FlightList" key={index}>
            <img src={FlightImage} alt="Flight" className="FlightImage" />
            <div className="FlightInfo">
              <div className="FlightInfoHeader">{value.Name}</div>
              <div className="FlightInfoItem">{value.Age}</div>
              <div className="FlightInfoItem">{value.Address}</div>
             
              <div className="FlightInfoItem">{value.Adharcard}</div>
            </div>
          </div>)
        }
        </>
    )

}
export default History;