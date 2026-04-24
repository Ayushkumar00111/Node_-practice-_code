import mysql from "mysql2/promise";
const pool = await mysql.createPool({
    host:"localhost",
    user:"root",
    password:"ayush12345",
    database:"nodejs"
})
export default pool;
   
