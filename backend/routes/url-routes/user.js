import e from "express";
import User from "../../controlers/user-create.js";
import create from "../../controlers/login-user.js";

const route = e.Router();
route.post("/signup",User)
route.post("/login",create)
export default route;