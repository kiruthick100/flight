const mongoose=require('mongoose');
const Booking=new mongoose.Schema(
    {
        Name:String,
        Age:String,
        LoginId:String,
        Address:String,
        Adharcard:String,
       
        
    }
)
module.exports=mongoose.model('Booking',Booking);