import e from "express";
import { getuser } from "../../service/auth.js";
import middleware from "../../middleware/midddleware.js";
import User from "../../controlers/user-create.js";
import create from "../../controlers/login-user.js";
const route = e.Router();

route.get("/dashboard",middleware,(req,res)=>{
   
    const data = req.cookies.token;


res.render("dashboard" );
})
route.get("/signup",(req,res)=>{
res.render("signup");
})
route.get("/login",(req,res)=>{
res.render("login");
})
route.post("/signup",User)
route.post("/login",create)
export default route;