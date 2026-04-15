import e from "express";
import { getuser } from "../../service/auth.js";
import middleware from "../../middleware/midddleware.js";

const route = e.Router();

route.get("/dashboard",middleware,(req,res)=>{
   
    const data = req.cookies.token;


res.render("dashboard" );
})
route.get("/signup",(req,res)=>{
res.render("signup");
})
export default route;