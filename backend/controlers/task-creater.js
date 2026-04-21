import { taskcreate } from "../models/task.js";
import { Userdata } from "../models/user.js";

import { ObjectId } from "mongodb";
export default async function task (req,resp){
try {
  const usersid = req.userid;

  const { Task, description } = req.body;

  const reuslt = await taskcreate.create({
    Task,
    description,
    userid: usersid,
  });
  if(!reuslt){
    return resp.status(300).json({meassge:"data no instered"})
  }
  

  return resp.redirect("/dashboard" )

} catch (error) {
  return resp.json({
    meassge: "faild to add data ",
    success: false,
    err: error,
  });
}


}


