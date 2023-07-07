const mongoose=require('mongoose');
const Register1=new mongoose.Schema(
    {
        Name:String,
        Passwoard:String,
        Email:String,
        Admin:String,
    }
)
module.exports=mongoose.model('Register',Register1);
