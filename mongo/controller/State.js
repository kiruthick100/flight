const State1=require('../model/State');

exports .AddState=async(req,res)=>
{
    try{
        console.log(req.body);
        const newState=await State1.create(req.body);
        return res.status(201).json(
            {
                data:newState
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
exports .GetState=async(req,res)=>
{
    try{
        const state= await State1.find()
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