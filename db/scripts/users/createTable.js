import query from "../../connection.js";
// import db from "../../connection.js";

const sqlString =  `CREATE TABLE IF NOT EXISTS bootcamperFeedback (id SERIAL PRIMARY KEY, name TEXT, date DATE, dailyFeedBack TEXT, workShopRating INTEGER, guestLectureRating INTEGER, userFeelingRating INTEGER, bootcamperOfTheWeek TEXT);`
;

async function createUserDatabase(){
   const response = await query(sqlString)
   console.log("Table Created", response);

}


createUserDatabase();
