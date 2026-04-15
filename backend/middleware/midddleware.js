function middleware (req,resp,next){

    const data = req.cookies.token;
   
    const publicRoutes = ["/","/signup"];

    if(publicRoutes.includes(req.path)){
        return next();
    }
    if(!data){
        return resp.redirect("/")
    }
    next()
}
export default middleware;