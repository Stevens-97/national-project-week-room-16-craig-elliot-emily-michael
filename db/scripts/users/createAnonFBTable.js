import query from "../../connection.js";
// import db from "../../connection.js";

const sqlString =  `CREATE TABLE IF NOT EXISTS AnonymousFeedback (id SERIAL PRIMARY KEY, date TEXT, feedback TEXT );`
;

async function createUserDatabase(){
   const response = await query(sqlString)
   console.log("Table Created", response);

}


createUserDatabase();
