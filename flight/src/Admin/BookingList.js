import axios from "axios";
import React, { useEffect, useState } from "react";
const BookingList=()=>
{
    const [Booking,SetBooking]=useState([]);
    useEffect(()=>
    {
        const BookingList1=async()=>
        {

        
        const response=await axios.get("http://localhost:3000/api/BookingDetails")
        SetBooking(response.data);
        console.log(response.data)
        }
        BookingList1()
    },[])
    return(
        <>
         { Booking.map((value, index) => (
          
          <div>
            
            <div className="FlightInfo">
              <div className="FlightInfoHeader">{value.Name}</div>
              <div className="FlightInfoItem">{value.Age}</div>
              <div className="FlightInfoItem">{value.Address}</div>
             
              <div className="FlightInfoItem">{value.Adharcard}</div>
            </div>
            </div>          
        ))}
        </>
    )
}
export default BookingList