import db from "../../connection.js";

const response = db.query(
   `CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name TEXT, date DATE, dailyFeedBack TEXT, workShopRating INTEGER, guestLectureRating INTEGER, userFeelingRating INTEGER, bootcamperOfTheWeek TEXT);`
);

console.log(response);

db.end();
