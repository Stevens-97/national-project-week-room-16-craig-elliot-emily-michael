import query from "../db/connection.js";
import { userData } from "../user-data.js";

export async function getAllUsers() {
   const result = await query(`SELECT * FROM bootcamperFeedback;`);
   console.log("RESULTS HERE", result.rows);
   return result.rows;
}

// get user by ID
export async function getUserById(userID) {
   const result = await query(
      `SELECT * FROM bootcamperFeedback WHERE id=${userID}`
   );
   console.log(result.rows);
   return result.rows;
}

// Appending User to userData
export async function createUser(
   name,
   chort,
   date,
   dailyFeedBack,
   workShopRating,
   guestLectureRating,
   userFeelingRating,
   bootcamperOfTheWeek
) {
   const result = await query(
      `INSERT INTO bootcamperFeedback (name, chort, date, dailyfeedback, workshoprating, guestlecturerating, userfeelingrating, bootcamperoftheweek) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
      [
         name,
         chort,
         date,
         dailyFeedBack,
         workShopRating,
         guestLectureRating,
         userFeelingRating,
         bootcamperOfTheWeek,
      ]
   );

   console.log(result.rows);

   return result.rows;
}

// TODO updating the data by ID
export function updateUser(id, updates) {
   const foundIndex = userData.findIndex(function (data) {
      return data.id === id;
   });
   userData[foundIndex] = updates;
   return userData[foundIndex];
}

// delete user by id
export async function deleteUser(id) {
   const result = await query(
      `DELETE FROM bootcamperFeedback WHERE id=${id} RETURNING *;`
   );
   console.log(result.rows);
   return result.rows;
}
//Get anonymous feeback table
export async function getAnonFB() {
   const result = await query(`SELECT * FROM AnonymousFeedback;`);
   console.log("RESULTS HERE", result.rows);
   return result.rows;
}

//Post anonymous feeback table
export async function postAnonFB(date, feedback) {
   const result = await query(
      `INSERT INTO AnonymousFeedback (date, feedback) VALUES ($1, $2) RETURNING * ;`,
      [date, feedback]
   );
   return result.rows;
}
