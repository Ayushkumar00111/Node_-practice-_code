import { getuser } from "../service/auth";

function middleware2 (req,resp,next){
    const data = req.cookies.token;
   
    const publicRoutes = ["/","/signup"];

    if(publicRoutes.includes(req.path) || data){
        const userids = getuser({userid})
        console.log(userids +"iam in middle ware")
        req.userid = userids
        return next();
    }
  
        return resp.redirect("/")
    

}
export default middleware2;