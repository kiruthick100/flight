// const { response } = require('express');
const Flight=require('../model/Admin');

exports .AddFlight=async(req,res)=>
{
    try{
        const AddFlight=await Flight.create(req.body);
        return res.status(201).json(
            {
                data:AddFlight
            }
        )
        }
        catch(error){
            return res.status(500).json(
                {
                    msg:'Internet error'
                }
            )
        }
}
exports.AddedFlight=async(req,res)=>
{
    
    try{
        const YourBooking= await Flight.find()
        console.log(YourBooking)
        console.log(req.params.id)
        if(YourBooking)
        {
            const your= YourBooking.filter((value)=>(value.AdminId==req.params.id))
            res.send(your)
        }
    }
    catch(error){
        return res.status(500).json(
            {
                
            }
        )
    }
//
    
}
exports.deleteFlight=async(req,res)=>
{
    try{
        const afterdelete= await Flight.findByIdAndDelete(req.params.id);      
          console.log(afterdelete)
        return res.send("hel")
    }
    catch(error){
        return res.status(500).json(
            {
                
            }
        )
    }
}




exports.update=async(req,res)=>
{
    try{
        console.log(req.params.id)
        const UpdateFlight=await Flight.findById(req.params.id)
        if(UpdateFlight)
        {
            
            var temp={name:UpdateFlight.name,From:UpdateFlight.From,To:UpdateFlight.To,Date:UpdateFlight.Date,Time:UpdateFlight.Time,SeatAvailable:req.params.list,Amount:UpdateFlight.Amount}
           const updated= await Flight.findByIdAndUpdate(req.params.id,temp)
           res.send(updated);
            //  res.send("hello")
        }
    }
    catch(error){
        return res.status(500).json(
            {
                
            }
        )
    }
}