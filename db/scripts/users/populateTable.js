import query from "../../connection.js";
import { userData } from "../../../user-data.js";

async function populateUserDatabase(){
    for (let i = 0; i < userData.length; i++) {
         const {name, chort, date, dailyFeedBack, workShopRating, guestLectureRating, userFeelingRating, bootcamperOfTheWeek} = userData[i]
    
        const response = await query(
            `INSERT INTO bootcamperFeedback (name, chort, date, dailyFeedBack, workShopRating, guestLectureRating, userFeelingRating, bootcamperOfTheWeek) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`, [name, chort, date, dailyFeedBack, workShopRating, guestLectureRating, userFeelingRating, bootcamperOfTheWeek]);
            console.log(response);
        };
};
populateUserDatabase()