// const { default: AddFlight } = require('../../flight/src/Admin/AddFlight');
const Flight=require('../model/Admin');
exports .DisplayDetails=async(req,res)=>
{
    try{
        const AddFlight=await Flight.find();
        if(AddFlight)
        {
            const Details=AddFlight.filter((AddFlight1)=>AddFlight1.From==req.params.From && AddFlight1.To==req.params.To) 
        return res.send(Details);
        }
        
        }
        catch(error){
            return res.status(500).json(
                {
                    msg:'Internet errr'
                }
            )
        }
}
exports .AvailableFlight=async(req,res)=>
{
    try{
        console.log(req.params.State)
        const AddFlight=await Flight.find();
        if(AddFlight)
        {
            const Details=AddFlight.filter((AddFlight1)=>AddFlight1.State==req.params.State) 
        return res.send(Details);
        }
        
        }
        catch(error){
            return res.status(500).json(
                {
                    msg:'Internet errr'
                }
            )
        }
}
exports.UpdateAvailableSeat=async(req,res)=>
{
    try{
        const UpdateFlight=await Flight.findById("64985efb7fd726676df3e9ba")
        if(UpdateFlight)
        {
           console.log(req.body)
            
           const updated= await Flight.findOneAndUpdate("64985efb7fd726676df3e9ba",req.body)
           res.send(updated);
        }

    }
    catch(error){
        return res.status(500).json(
            {
                msg:'Internet errr'
            }
        )
    }
}