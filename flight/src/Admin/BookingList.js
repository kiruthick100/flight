
import axios from "axios";
import React, { useEffect, useState } from "react";
import './BookingList.css';

const BookingList = () => {
  const [booking, setBooking] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookingList = async () => {
      try {
        setIsLoading(true); 
        const response = await axios.get("http://localhost:3000/api/BookingDetails");
        setBooking(response.data);
        setIsLoading(false); 
      } catch (error) {
        console.error("Error occurred while fetching booking details:", error);
        setIsLoading(false); 
      }
    };

    fetchBookingList();
  }, []);

  return (
    <div className="booking-container">
      {isLoading ? (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          {booking.map((value, index) => (
            <div className="booking-item" key={index}>
              <div className="booking-info">
                <div className="booking-info-header">{value.Name}</div>
                <div className="booking-info-item">{value.Age}</div>
                <div className="booking-info-item">{value.Address}</div>
                <div className="booking-info-item">{value.Adharcard}</div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default BookingList;
