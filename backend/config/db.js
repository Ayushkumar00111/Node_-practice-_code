
import mongoose from "mongoose";
async function database(){
mongoose.connect("mongodb://127.0.0.1:27017/Users")
.then(()=>{
    console.log("MongoDB connected successfully");
})
.catch((err)=>{
    console.log("Connection error:", err);
});
}
export default database;