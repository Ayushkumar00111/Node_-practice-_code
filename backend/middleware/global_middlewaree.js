import { getuser } from "../service/auth.js";

function middleware2 (req,resp,next){
    const data = req.cookies.token;
   
    const publicRoutes = ["/","/signup"];

    if(publicRoutes.includes(req.path) || data){
        const userids = getuser(data)
       
        req.userid = userids.userid
        return next();
    }
  
        return resp.redirect("/")
    

}
export default middleware2;