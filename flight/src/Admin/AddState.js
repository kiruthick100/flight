import axios from 'axios';
import { useState } from "react";

const AddState = () => {
  const LoginId=localStorage.getItem("LoginId")
  
    const [formData, setFormData] = useState({
     
      State:'',
      AdminId:LoginId,
    
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      
       
      try {
        console.log(formData);
        const response = await axios.post('http://localhost:3000/api/AddState', formData);
        console.log("fghj",response.data); 
      } catch (error) {
        console.error(error); 
      }
      setFormData({
     
        State:'',
      

      });
    };
  
    return (
      <>
      <div>
      <center>
      <form onSubmit={handleSubmit}>
       
        <label>
        <h1 style={{front:"arial",}}>State From</h1>
          <input
            type="text"
            name="State"
            value={formData.State}
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
  export default AddState;
  