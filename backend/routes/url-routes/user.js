import e from "express";
import User from "../../controlers/user-create.js";
import create from "../../controlers/login-user.js";

const route = e.Router();
route.post("/signup",User,/* #swagger.parameters['body'] = { in: 'body', required: true, schema: { email: "test@gmail.com", password: "123456" } } */)
route.post("/login",create,/* #swagger.parameters['body'] = { in: 'body', required: true, schema: { email: "test@gmail.com", password: "123456" } } */)
export default route;