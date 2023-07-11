const Distric1=require('../model/Distric');

exports .AddDistric=async(req,res)=>
{
    try{
        console.log(req.body);
        const newDistric=await Distric1.create(req.body);
        return res.status(201).json(
            {
                data:newDistric
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
exports .GetDistrci=async(req,res)=>
{
    try{
        const state= await Distric1.find()
        res.send(state)
        }
        catch(error){
            return res.status(500).json(
                {
                    msg:'Internet error'
                }
            )
        }
}
