import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import DisplayUserData from "../Client/DisplayUserData";
import DisplayFlight from "../Client/DisplayFlight"
import AddFlight from "../Admin/AddFlight";
import DetailView from "../Client/DetailView";
import Payment from "../Client/Payment";
import PasangerDetails from "../Client/PasangerDetails";
import AvailableFlight from "../Client/AvailableFlight";
import BookingList from "../Admin/BookingList";
import Register from "../Client/Login/Register";
import Login from "../Client/Login/Login"
import Logout from "../Client/Login/Logout";
import History from "../Client/Histroy";
import Error from "./Error";
import "./Header.css"
const Header=()=>
{
  const [Fixed,SetFixed]=useState([]);
  const data =localStorage.getItem("LoginAdmin")
  useEffect(()=>
  {
    
  var SetLogin=0;
    const temp=[data];
  SetFixed(temp);
  SetLogin=1;
  },[data])
  const AfterLogout=()=>
  {
    SetFixed([])
     var SetLogin=0;
      const temp=[data];
      SetFixed(temp);
     SetLogin=1;
  
  }
  const Logout1=()=>
    {
        localStorage.clear();
        AfterLogout();


    }
    return(
        
          
       <Router>
        
      <navbar className="header">
        
          <Link to="/" >Home</Link>
        <Link to="/AvailableFlight">Flight</Link>
        {
           data=="Yes" && <Link to="/BookingList">Booked</Link>
        }
       
        <Link to ="/History">History</Link>
       {
        data=="Yes" && <Link to="AddFlight">AddFlight</Link>
       }
          </navbar>

          <Routes>
          

          <Route     path="/Login" element={<Login/>}></Route>
            <Route  exact path="/" element={<DisplayUserData/>}></Route>
            
            <Route  path="/DisplayFlight" element={<DisplayFlight/>}></Route>
            {
        data=="Yes" ? <Route  path="/AddFlight" element={<AddFlight/>}></Route>:
        <Route  path="/AddFlight" element={<Error/>}></Route>
       }
            
            <Route  path="/DetailView" element={<DetailView/>}></Route>
            <Route path="/Payment" element={<Payment/>}></Route>
            <Route path="/DetailView" element={   <DetailView/>}></Route>
            <Route path="/AvailableFlight" element={<AvailableFlight/>}></Route>
            <Route path="/PasangerDetails" element={<PasangerDetails/>}></Route>
            <Route path="/BookingList" element={<BookingList/>}></Route>
            <Route path="/Register" element={<Register/>}></Route>
            <Route path="/Logout" element={<Logout/>}></Route>
            <Route path="/History" element={<History/>}></Route>
          </Routes>
        </Router>
        
        
    )
}
export default Header;