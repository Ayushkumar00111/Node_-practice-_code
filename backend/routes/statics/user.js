import e from "express";
import { getuser } from "../../service/auth.js";
import middleware from "../../middleware/midddleware.js";
import User from "../../controlers/user-create.js";
import create from "../../controlers/login-user.js";
import task from "../../controlers/task-creater.js";
import { taskcreate } from "../../models/task.js";


const route = e.Router();


route.get("/dashboard",middleware, async(req,res)=>{ 
const token = req.userid
const data = await taskcreate.find({userid:token})
console.log(data)



res.render("dashboard" ,{data} );
})
route.get("/signup",(req,res)=>{
res.render("signup");
})
route.get("/login",(req,res)=>{
res.render("login");
})
route.post("/signup",User)
route.post("/login",create)
route.post("/task",task)
export default route;