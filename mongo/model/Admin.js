const mongoose=require('mongoose');
const AddFlight1=new mongoose.Schema(
    {
        name:String,
        State:String,
        From:String,
        To:String,

        Date:String,
        Time:String,
        SeatAvailable:[],
        BusinessClass:[],
        Amount:Number,
        AdminId:String
        
    }
)
module.exports=mongoose.model('AddFlight',AddFlight1);
