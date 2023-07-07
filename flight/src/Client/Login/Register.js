import axios from 'axios';
import { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
      Name :'',
      Passwoard:'',
      Email:'',
      Admin:"No"
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      
       
      try {
        const response = await axios.post('http://localhost:3000/api/Register', formData);
        console.log(response.data); 
      } catch (error) {
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
  export default Register;
  