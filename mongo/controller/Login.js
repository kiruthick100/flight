const Login = require('../model/Login');
const Register3=require('../model/Login');

exports .Register=async(req,res)=>
{
    try{
        console.log(req.body.Email)
        const VerificationEmail=await Register3.find();
        // if(VerificationEmail)
        // {
            const check = VerificationEmail.filter((value)=>value.Email==req.body.Email)
            console.log(check)
            if(check.length>0)
            {
                
                return res.status(301).json(
                    {
                        msg:'Email already exist'
                    })
            }
            else
            {

            
        // }
        const RegisterData=await Register3.create(req.body);
        
        return res.status(201).json(
            {
                data:RegisterData
            }
        )
    }
        }
        catch(error){
            return res.status(500).json(
                {
                    msg:'Internet error'
                }
            )
        }
}
exports.Login1=async(req,res)=>
{
    try{
        console.log(req.params.Email)
        const LoginVerification=await Register3.find();
        if(LoginVerification)
        {
            console.log(LoginVerification);
            const EmailVerifcation=LoginVerification.filter((value)=>(value.Email==req.params.Email))
            console.log(EmailVerifcation)
            if(EmailVerifcation)
            {
                console.log(EmailVerifcation[0].Passwoard);
                console.log(req.params.Passwoard);
                if(EmailVerifcation[0].Passwoard==(req.params.Passwoard))
                {
                   res.send(EmailVerifcation[0])
                }
                
            }
            
        }
        
    }
    catch(error){
        return res.status(500).json(
            {
                msg:'Internet error'
            }
        )
    }
}