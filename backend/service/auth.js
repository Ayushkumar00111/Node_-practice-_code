import jwt from "jsonwebtoken";
const secert ="authnameisayush"
export  function setuser(user) {
    return jwt.sign(user ,secert)
}
 export function getuser(token) {
    if(!token){
        return ({meassage:"interally errro"})
    }
    try{
        const data = jwt.verify(token ,secert)
        return data 
    }catch(error){
        return ({err:"internal errr"+error})
    }
}