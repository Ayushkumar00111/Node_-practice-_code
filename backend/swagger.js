
import swaggerAutogen from "swagger-autogen";
const doc={
    info:{
        title:"basic-login-system",
        description:"this is a normal pretice code"
    },
    host:"localhost:500",
    schemes:["http"]
}
const outputFile = "./swagger-output.json"
const routes= ["./routes/url-routes/user.js","./routes/statics/user.js"]
swaggerAutogen(outputFile , routes , doc);