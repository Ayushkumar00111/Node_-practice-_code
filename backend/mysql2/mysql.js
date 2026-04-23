import mysql from "mysql2/promise";
async function mysqls() {
 const db =   await mysql.createConnection({
        host :"localhost",
        user : "root",
        password : "ayush12345",
       database : "nodejs"
    })
    console.log("mysql was connected")
    // db.execute('create database nodejs')

//  await db.execute(`
//     CREATE TABLE example_project(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     username VARCHAR(100) NOT NULL,
//     email VARCHAR(100) NOT NULL UNIQUE
//     )
    
//     `)
//   await db.execute(`
//     INSERT INTO example_project(username,email)
//    values("ayush","ayush2@gmail.com")
    

//     `)

// const values = [
//     ["kamat","kamat@gmail.com"],
//     ["lalat","lalat@gmail.com"],
//     ["majak","majak@gmail.com"],
// ]
// await db.query(`
//    INSERT INTO example_project(username,email) values ? 
//     `,[values])
// await db.execute(`
//     UPDATE example_project
//     SET email="ayushkamat@.com" , username="ayushkaka"
//     WHERE id=3
//     `)
await db.execute(`
    DELETE FROM example_project
    WHERE id=6
    `)
const [row] = await db.execute('select * from example_project ')
console.log(row)
}
export default mysqls;
   