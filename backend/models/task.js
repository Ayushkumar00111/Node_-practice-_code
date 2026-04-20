
import mongoose  from "mongoose";
 const schema = new mongoose.Schema({
    Task:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        
    },
    userid:{
        type:String,

    },
    
},
    {
timestamps:true
    }
    
 )
 export const taskcreate = mongoose.model("taskcreater",schema);