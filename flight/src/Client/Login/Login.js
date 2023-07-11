import axios from 'axios';
import { useState } from "react";
import {  useNavigate } from 'react-router-dom';
const Login = () => {
    const navigation=useNavigate()
    const [formData, setFormData] = useState({
      Name :'',
      Passwoard:'',
      Email:''
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      
       
      try {
        console.log(formData.Email)
        const response = await axios.get(`http://localhost:3000/api/Login/${formData.Email}/${formData.Passwoard}`);
        console.log(response); 
        if(response)
        {
            alert("You Login successfully")
            console.log(response.data._id);
          
            localStorage.setItem('LoginId', response.data._id);
            localStorage.setItem('LoginEmail', response.data.Email);
            localStorage.setItem('LoginAdmin', response.data.Admin);
            window.location.reload();
            // navigation("/")

        }
        
      } catch (error) {
        
            alert("Your password wrong or wrong email")
        
        console.error(error); 
      }
      setFormData({
        Name :'',
        Passwoard:'',
        Email:''
      });
    };
  
    return (
      <center>
      <form onSubmit={handleSubmit}>
        <label>
        <h1 style={{front:"arial",}}> Name</h1>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
        <h1 style={{front:"arial",}}>Passwoard</h1>
          <input
            type="passwoard"
            name="Passwoard"
            value={formData.Passwoard}
            onChange={handleChange}
            required
          />
        </label>
        <label>
        <h1>Email</h1>
          <input
            type="text"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            required
          />
        </label>
       
      
       
       
        
        <button type="submit">Submit</button>
      </form>
      </center>
    );
  }
  export default Login;
  