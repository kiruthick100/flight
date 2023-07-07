import axios from "axios";
import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const PasangerDetails=()=>
{
    const location=useLocation();
    const navigator=useNavigate()
    console.log(location.state.value.list)
    console.log(location.state)   
    const data = localStorage.getItem("LoginId");
    const [formData, setFormData] = useState({
      Name: '',
      Age: '',
      Address: '',
      LoginId:localStorage.getItem("LoginId"),
      Adharcard:''
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const Payment=async(e)=>{

      e.preventDefault();
  
      try {
        console.log(formData)
        console.log(data);
        if(data==null)
        {
          alert("you please login");
          navigator('/Login')
        }
        else{

        
        const response = await axios.post("http://localhost:3000/api/bookinglist",formData);
        console.log(response);
        }
      } 
      catch (error) {
        console.log(error);
      }
        try {

            
            const response = await axios.put(`http://localhost:3000/api/update/${location.state.value.id}/${location.state.value.list}`);
            console.log(response.data); 
          } catch (error) {
            console.error(error); 
            
          }
        navigator("/Payment",{state:{value:location.state.amount*location.state.value}})
    }
    return(
        <>
       
       
    <div className="container">
      <div className="flight">
        <div className="airplane"></div>
      </div>
      <form className="form" onSubmit={Payment}>
        <div className="field">
          <label htmlFor="fromInput">NAME</label>
          <input
            type="text"
            id="fromInput"
            name="Name"
            value={formData.From}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="toInput">Age</label>
          <input
            type="text"
            id="toInput"
            name="Age"
            value={formData.To}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="dateInput">Address</label>
          <textarea
            type="textarea"
            id="dateInput"
            name="Address"
            value={formData.Date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="dateInput">AdharacardNumber</label>
          <input
            type="text"
            id="dateInput"
            name="Adharcard"
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
 
        </>
    )
}
export default PasangerDetails;