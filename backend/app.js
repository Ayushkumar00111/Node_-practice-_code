import express  from "express";
import user from "./routes/statics/user.js"
import postuser from "./routes/url-routes/user.js"
import database from "./config/db.js";
import cookieParser from "cookie-parser";
import middleware from "./middleware/midddleware.js";
database();

const app = express();
app.use(express.json());

app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
// app.use(middleware)
app.set('view engine','ejs')



app.use("/" ,user)
app.use("/user" , postuser)


app.get("/",(req,res)=>{
    res.render("login")
})
app.listen(3000 ,()=>{
    console.log("server are success full run ")
})