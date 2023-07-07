const mongoose =require('mongoose')
exports.connectDb=async ()=>
{
    try{
        const conn=await mongoose.connect('mongodb://0.0.0.0/flight');
        console.log('db is connected');
    }
    catch(error)
    {
        console.log('error is db connection');
        console.log(error);
    }
}