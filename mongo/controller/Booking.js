const Booking=require('../model/Booking');
exports.Booking=async(req,res)=>{
    
    try{
        console.log(req.body);
        const BookingList=await Booking.create(req.body);
        return res.status(201).json(
            {
                data:BookingList
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
exports .BookedDetails=async(req,res)=>
{
    try{
        const BookedList=await Booking.find();
       res.send(BookedList);

        
        }
        catch(error){
            return res.status(500).json(
                {
                    msg:'Internet errr'
                }
            )
        }
}
exports.History=async(req,res)=>
{
    try{
        const HistoryList=await Booking.find();
        if(HistoryList)
        {
            
            const DetailHistory=HistoryList.filter((value)=>(value.LoginId==req.params.id))
            console.log(DetailHistory);
            res.send(DetailHistory);

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
