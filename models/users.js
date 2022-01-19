import  query  from "../db/connection.js";
import { userData } from "../user-data.js";

export async function getAllUsers() {
   const result = await query(`SELECT * FROM bootcamperFeedback;`);
   console.log("RESULTS HERE",result.rows);
   return result.rows;
}

// To test get request
// export function getAllUsers() {
//    return userData;
// }

// get user by ID
export function getUserById(userID) {
   const foundUser = userData.find(function (data) {
      return Number(userID) === data.id;
   });
   return foundUser;
}

// Appending User to userData
export function createUser(user) {
   userData.push(user);

   return userData[user.length - 1];
}

// updating the data by ID
export function updateUser(id, updates) {
   const foundIndex = userData.findIndex(function (data) {
      return data.id === id;
   });
   userData[foundIndex] = updates;
   return userData[foundIndex];
}

// delete user by id
export function deleteUser(id) {
   const foundIndex = userData.findIndex(function (data) {
      return Number(data.id) === id;
   });

   const users = userData[foundIndex];

   userData.splice(foundIndex, 1);

   return users;
}
