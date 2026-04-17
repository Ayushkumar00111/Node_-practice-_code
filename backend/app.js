import express  from "express";
import user from "./routes/statics/user.js"
import postuser from "./routes/url-routes/user.js"
import database from "./config/db.js";
import cookieParser from "cookie-parser";
import middleware from "./middleware/midddleware.js";

import dotenv from "dotenv";

import swaggerUi from "swagger-ui-express";
import swaggeroutput from "./swagger-output.json" assert { type: "json" };
dotenv.config();
database();
const app = express();

app.use(express.json());

app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

app.use("/app-swagger" , swaggerUi.serve , swaggerUi.setup(swaggeroutput))

// app.use(middleware)
app.set('view engine','ejs')



app.use("/" ,user)
app.use("/user" , postuser)


app.get("/",(req,res)=>{
    res.render("login")
})
const port = process.env.port
app.listen(port ,()=>{
    console.log("server are success full run ")
})