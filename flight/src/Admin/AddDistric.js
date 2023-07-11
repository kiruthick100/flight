import axios from 'axios';
import { useState } from "react";

const AddDistric = () => {
  const LoginId=localStorage.getItem("LoginId")
  
    const [formData, setFormData] = useState({
     
      Distric:'',
      AdminId:LoginId,
    
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      
       
      try {
        console.log(formData);
        const response = await axios.post('http://localhost:3000/api/AddDistric', formData);
        console.log("fghj",response.data); 
      } catch (error) {
        console.error(error); 
      }
      setFormData({
     
        Distric:'',
        

      });
    };
  
    return (
      <>
      <div>
      <center>
      <form onSubmit={handleSubmit}>
       
        <label>
        <h1 style={{front:"arial",}}>Distric From</h1>
          <input
            type="text"
            name="Distric"
            value={formData.Distric}
            onChange={handleChange}
            required
          />
        </label>
    
        
        <button type="submit">Submit</button>
      </form>
         

      </center>
      </div>
   <div>
  
   </div>
      </>
    );
  }
  export default AddDistric;
  