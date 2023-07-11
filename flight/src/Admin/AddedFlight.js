import axios from "axios";
import { useEffect, useState } from "react";

const AddedFlight=()=>
{
    const LoginId=localStorage.getItem("LoginId")
    const [Added,setAdded]=useState([])
    const delete1=async(event)=>
    {
        console.log(event.target.id)
        await axios.delete(`http://localhost:3000/api/deleteFlight/${event.target.id}`).then((res)=>{
            // setAdded(res.data)
            console.log(res.data);
          
        }).catch((err)=>{console.log(err)})
    }
    useEffect( () =>
    {
        const add=async()=>
        {

        
        await axios.get(`http://localhost:3000/api/AddedFlight/${LoginId}`).then((res)=>{
            setAdded(res.data)
          
        }).catch((err)=>{console.log(err)})
        // SetAdded(response)

    }
         add()
    },[])
    
    return (
        <>
        { Added.map((value, index) => (
          <div className="FlightList" key={value._id} >
          
            <div className="FlightInfo">
              <div className="FlightInfoHeader">{value.To}</div>
              <div className="FlightInfoItem">{value.From}</div>
              <div className="FlightInfoItem">{value.Date}</div>
             
              <div className="FlightInfoItem">{value.Time}</div>
              <button id ={value._id}onClick={delete1}>Delete</button>
            </div>
          </div>
        ))}
        </>
    )
}
export default AddedFlight;