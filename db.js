import mysql from "mysql";

 const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"realblog",
    password:"Yoruichi11"
})

export default db;