import query from "../../connection.js";
// import db from "../../connection.js";

const sqlString =  `CREATE TABLE IF NOT EXISTS AnonymousFB (id SERIAL PRIMARY KEY, date TEXT, name TEXT );`
;

async function createUserDatabase(){
   const response = await query(sqlString)
   console.log("Table Created", response);

}


createUserDatabase();
