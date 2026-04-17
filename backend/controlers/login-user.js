import { p } from "framer-motion/m";
import { Userdata } from "../models/user.js";
import { setuser } from "../service/auth.js";
import bcrypt from "bcrypt";

async function  create(req, resp) {
    
    try{
        const {email , password} = req.body;
   

        const result = await Userdata.findOne({email})
        const sucess = await bcrypt.compare(password , result.password)
        if(!sucess){
            return resp.json({meassge:"data not founded"})
        }

        const token = setuser(req.body)
      
        resp.cookie('token',token)
        return resp.redirect("/dashboard")

    }catch(error){
     
return resp.json({success:false ,message:error})
    }
}
export default create;