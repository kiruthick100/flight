const express=require('express');
const bodyparser=require('body-parser');
const{AddFlight,update,AddedFlight,deleteFlight, updateClass}=require('./controller/Admin')
const{Register,Login1}=require('./controller/Login')
const {AddState,GetState}=require('./controller/State')
// const { AddDistric } =require( './controller/Distric');
const{Booking,BookedDetails,History}=require('./controller/Booking')
const {DisplayDetails, UpdateAvailableSeat,AvailableFlight}=require('./controller/Client')
const {connectDb}=require('./config/db')
const cors=require('cors');
const { AddDistric,GetDistrci } = require('./controller/Distric');
connectDb();
const app=new express();
app.use(cors())
app.use(bodyparser.json())
app.post('/api/AddFlight',AddFlight);
app.get('/api/AddedFlight/:id',AddedFlight);
app.delete('/api/deleteFlight/:id',deleteFlight);
app.get('/api/DisplayFlight/:From/:To/:Date',DisplayDetails);
app.put('/api/DisplayFlight',UpdateAvailableSeat)
app.put('/api/update/:id/:list',update)
app.put('/api/updateclass/:id/:list',updateClass)
app.post('/api/bookinglist',Booking)
app.get('/api/AvailableFlight/:State',AvailableFlight);
app.get('/api/BookingDetails',BookedDetails)
app.post('/api/Register',Register)
app.get('/api/Login/:Email/:Passwoard',Login1)
app.get('/api/History/:id',History)
//  state 
app.post('/api/AddState',AddState);
app.get('/api/GetState',GetState)
// Distric
app.post('/api/AddDistric',AddDistric);
app.get('/api/GetDistrict',GetDistrci)

app.listen(3000,()=>
{
    console.log("server running")
})