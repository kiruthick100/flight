const mongoose=require('mongoose');
const AvailableDistric=new mongoose.Schema(
    {
        Distric:String,
        AdminId:String
    }
)
module.exports=mongoose.model('Distric',AvailableDistric);