import React, { useEffect, useState } from "react";
import "./FlightSeat.css"
import { useNavigate } from "react-router-dom";

const FlightSeat=(prop)=>
{
  const navigator=useNavigate();

  console.log(prop.value);
  const [temp1,settemp1]=useState(prop.value. BusinessClass[0].split(","))
  
  
  console.log(temp1)
  const[SaveChangedSeat1,setSaveChangedSeat]=useState(prop.value. BusinessClass[0].split(","));
  function SaveChangedSeat(event)
  {
    console.log(event.target.id)
   
    if(SaveChangedSeat1.includes(event.target.id) )
    {
      const SelectedSeat=SaveChangedSeat1.filter((id)=>id!=event.target.value)
      setSaveChangedSeat(SelectedSeat)
    }
    else{
      const SelectedSeat=[...SaveChangedSeat1,event.target.id]
      setSaveChangedSeat( SelectedSeat)
    }
    
    
   
   
  }

  useEffect(()=>
  {
    
  },[])
 var temp=[prop.value._id]

 console.log(temp)
  function PasangerDetails()
    {
        navigator("/PasangerDetails",{state:{value:{"id":temp,"list":SaveChangedSeat1,"class":"Business"}}})
    }
    return(
      

    
  
   

<>

    <div className="plane">
        
      <div className="fuselage">
        
      </div>
      <ol className="cabin fuselage">
        <li className="row row--1">
          <ol className="seats" type="A">
            {temp1.includes("1AA")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="1AA" onClick={SaveChangedSeat} />
            <label for="1AA">1AA</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="1AA" onClick={SaveChangedSeat} />
              <label for="1AA">1AA</label>
            </li>)}
            
          {temp1.includes("1BB")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="1BB" onClick={SaveChangedSeat} />
            <label for="1BB">1BB</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="1BB" onClick={SaveChangedSeat} />
              <label for="1BB">1BB</label>
            </li>)}  
            {temp1.includes("1CC")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="1CC" onClick={SaveChangedSeat} />
            <label for="1CC">1CC</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="1CC" onClick={SaveChangedSeat} />
              <label for="1CC">1CC</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="1C" />
              <label for="1C">1C</label>
            </li> */}
             {temp1.includes("1DD")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="1DD" onClick={SaveChangedSeat} />
            <label for="1DD">1DD</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="1DD" onClick={SaveChangedSeat} />
              <label for="1DD">1DD</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" disabled id="1D" />
              <label for="1D">Occupied</label>
            </li> */}
             {temp1.includes("1EE")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="1EE" onClick={SaveChangedSeat} />
            <label for="1EE">1EE</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="1EE" onClick={SaveChangedSeat} />
              <label for="1EE">1EE</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="1E" />
              <label for="1E">1E</label>
            </li> */}
             {temp1.includes("1FF")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="1FF" onClick={SaveChangedSeat} />
            <label for="1FF">1FF</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="1FF" onClick={SaveChangedSeat} />
              <label for="1FF">1FF</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="1F" />
              <label for="1F">1F</label>
            </li> */}
          </ol>
        </li>
        <li className="row row--2">
          <ol className="seats" type="A">
          {temp1.includes("2AA")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="2AA" onClick={SaveChangedSeat} />
            <label for="2AA">2AA</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="2AA" onClick={SaveChangedSeat} />
              <label for="2AA">2AA</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="2A" />
              <label for="2A">2A</label>
            </li> */}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="2B" />
              <label for="2B">2B</label>
            </li> */}
             {temp1.includes("2BB")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="2BB" onClick={SaveChangedSeat} />
            <label for="2BB">2BB</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="2BB" onClick={SaveChangedSeat} />
              <label for="2BB">2BB</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="2C" />
              <label for="2C">2C</label>
            </li> */}
             {temp1.includes("2CC")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="2CC" onClick={SaveChangedSeat} />
            <label for="2CC">2CC</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="2CC" onClick={SaveChangedSeat} />
              <label for="2CC">2CC</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="2D" />
              <label for="2D">2D</label>
            </li> */}
             {temp1.includes("2DD")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="2DD" onClick={SaveChangedSeat} />
            <label for="2DD">2DD</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="2DD" onClick={SaveChangedSeat} />
              <label for="2DD">2DD</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="2E" />
              <label for="2E">2E</label>
            </li> */}
             {temp1.includes("2EE")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="2EE" onClick={SaveChangedSeat} />
            <label for="2EE">2EE</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="2EE" onClick={SaveChangedSeat} />
              <label for="2EE">2EE</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="2F" />
              <label for="2F">2F</label>
            </li> */}
             {temp1.includes("2FF")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="2FF" onClick={SaveChangedSeat} />
            <label for="2FF">2FF</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="2FF" onClick={SaveChangedSeat} />
              <label for="2FF">2FF</label>
            </li>)}
          </ol>
        </li>
        <li className="row row--3">
          <ol className="seats" type="A">
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="3A" />
              <label for="3A">3A</label>
            </li> */}
             {temp1.includes("3AA")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="3AA" onClick={SaveChangedSeat} />
            <label for="3AA">3AA</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="3AA" onClick={SaveChangedSeat} />
              <label for="3AA">3AA</label>
            </li>)}

            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="3B" />
              <label for="3B">3B</label>
            </li> */}
             {temp1.includes("3BB")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="3BB" onClick={SaveChangedSeat} />
            <label for="3BB">3BB</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="3BB" onClick={SaveChangedSeat} />
              <label for="3BB">3BB</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="3C" />
              <label for="3C">3C</label>
            </li> */}
             {temp1.includes("3CC")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="3CC" onClick={SaveChangedSeat} />
            <label for="3CC">3CC</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="3CC" onClick={SaveChangedSeat} />
              <label for="3CC">3CC</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="3D" />
              <label for="3D">3D</label>
            </li> */}
             {temp1.includes("3DD")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="3DD" onClick={SaveChangedSeat} />
            <label for="3DD">3DD</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="3DD" onClick={SaveChangedSeat} />
              <label for="3DD">3DD</label>
            </li>)}
            {temp1.includes("3EE")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="3EE" onClick={SaveChangedSeat} />
            <label for="3EE">3EE</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="3EE" onClick={SaveChangedSeat} />
              <label for="3EE">3EE</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="3E" />
              <label for="3E">3E</label>
            </li> */}
             {temp1.includes("3FF")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="3FF" onClick={SaveChangedSeat} />
            <label for="3FF">3FF</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="3FF" onClick={SaveChangedSeat} />
              <label for="3FF">3FF</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="3F" />
              <label for="3F">3F</label>
            </li> */}
          </ol>
        </li>
        <li className="row row--4">
          <ol className="seats" type="A">
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="4A" />
              <label for="4A">4A</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="4B" />
              <label for="4B">4B</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="4C" />
              <label for="4C">4C</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="4D" />
              <label for="4D">4D</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="4E" />
              <label for="4E">4E</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="4F" />
              <label for="4F">4F</label>
            </li>
          </ol>
        </li>
        <li className="row row--5">
          <ol className="seats" type="A">
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="5A" />
              <label for="5A">5A</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="5B" />
              <label for="5B">5B</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="5C" />
              <label for="5C">5C</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="5D" />
              <label for="5D">5D</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="5E" />
              <label for="5E">5E</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="5F" />
              <label for="5F">5F</label>
            </li>
          </ol>
        </li>
      
        </ol>  
     
    </div>
    <button onClick={PasangerDetails}>Next</button>
  </>
    )
}
export default FlightSeat;