import pool from "../config/db"
async function   eventadd (req,resp) {
try {
    const {title , descriptions , event_date , total ,balance}= req.body
    if(!title & !descriptions & !event_date & !total){
        resp.status(400).json("enter all fields")
    }
   const connection = await pool.getConnection();
   const [row]= await connection.query(`INSERT INTO create_event(title , descriptions , event_date , total , balance)
    values (?,?,?,?)` ,[title, descriptions , event_date , total , balance]
   )
   if(!row){
 return   resp.status(499).json({measse:"internal add error"})
   }
   console.log(row)
 return  resp.json({meassge:"event was created"})
} catch (error) {
    return resp.status(400).json(error)
}
}
export default eventadd