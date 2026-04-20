import express  from "express";
import user from "./routes/statics/user.js"

import database from "./config/db.js";
import cookieParser from "cookie-parser";
import middleware from "./middleware/midddleware.js";

import dotenv from "dotenv";

import swaggerUi from "swagger-ui-express";
import YAML from "yamljs"

dotenv.config();
database();
const app = express();

app.use(express.json());

app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
const swaggerDoc = YAML.load("./swagger.yaml")
app.use("/app-swagger" , swaggerUi.serve , swaggerUi.setup(swaggerDoc))

// app.use(middleware)
app.set('view engine','ejs')



app.use("/" ,user )
app.get("/",(req,resp)=>{
    resp.render("home")
})





const port = process.env.port
app.listen(port ,()=>{
    console.log("server are success full run ")
})