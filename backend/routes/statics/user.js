import e from "express";
import { getuser } from "../../service/auth.js";
import middleware from "../../middleware/midddleware.js";
import User from "../../controlers/user-create.js";
import create from "../../controlers/login-user.js";
import task from "../../controlers/task-creater.js";
import { taskcreate } from "../../models/task.js";
import middleware2 from "../../middleware/global_middlewaree.js";


const route = e.Router();
route.get("/logout" ,(req,resp)=>{
    resp.clearCookie("token")
    return resp.redirect("/login")
})

route.get("/dashboard",middleware2, async(req,res)=>{ 
    
    try {
        const id = req.userid
        
const data = await taskcreate.find({userid:id})

res.render("dashboard" ,{data} );
    } catch (error) {
        return res.json({meassge:"faild to geting"})
    }

})
route.get("/signup",(req,res)=>{
res.render("signup");
})
route.get("/login",(req,res)=>{
res.render("login");
})
route.post("/signup",User)
route.post("/login",create )
route.post("/task",middleware2,task)
export default route;