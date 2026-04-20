
import { Userdata } from "../models/user.js";
import { setuser } from "../service/auth.js";
import bcrypt from "bcrypt";
async function User(req,resp) {
    try{

    const {name , email , password} = req.body;
    const hash = await bcrypt.hash(password,10)

    const data = await Userdata.create({
        name,
        email,
        password:hash
    })
  
  
    if(!data){

    return resp.json( {error :"data is not store"})
    }
       const token =  setuser(req.body);
       resp.cookie('token',token)
    
      return resp.redirect("/signup")
    
    
}catch(error){
    console.log(error)
   return resp.json({measage:error})
}
}
 export default User;