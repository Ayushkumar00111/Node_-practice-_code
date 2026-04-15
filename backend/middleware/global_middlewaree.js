function middleware2 (req,resp,next){
    const data = req.cookies.token;
   
    const publicRoutes = ["/","/signup"];

    if(publicRoutes.includes(req.path) || data){
        return next();
    }
  
        return resp.redirect("/")
    

}
export default middleware2;