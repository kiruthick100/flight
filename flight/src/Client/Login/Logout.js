import React from "react";
import {useState,useEffect} from "react"
const Logout=()=>
{
    const data =localStorage.getItem("LoginId")
  const [Fixed,SetFixed]=useState([]);
  var SetLogin=0;
  useEffect(()=>
  {
    const temp=[...Fixed,data];
  SetFixed(temp);
  SetLogin=1;
  },[])
  

    const Logout1=()=>
    {
        localStorage.clear();


    }
    return(
        <>
         {
          
          Fixed.length>0  && SetLogin ==0 && <button onClick={Logout1}>Logout</button>
          
        }
        {
         Fixed.length==0 && SetLogin==1 &&<button onClick={Logout1}>Login</button>
        }
        
        </>
    )

}
export default Logout;