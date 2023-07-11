const mongoose=require('mongoose');
const AvailableState=new mongoose.Schema(
    {
        State:String,
        AdminId:String
    }
)
module.exports=mongoose.model('State',AvailableState);