import request from "supertest";
import app from "./app.js";
// Template
// describe(`HTTP request`, ()=>{
//     it(`Should `, async () => {

//     })
// })

describe(`HTTP request`, () => {
   it(`Should return a payload with the following: { message: "I wish we had some information to give you ☹️" } when a get request is sent to '/' root`, async () => {
      await request(app)
         .get("/test")
         .expect(200)
         .expect(function (res) {
            const actual = res.body;
            console.log(res.body);
            const expected = {
               message: expect.any(String),
               success: expect.any(Boolean),
            };
            expect(actual).toStrictEqual(expected);
         });
   });
   it(`Should send a get request to "/users", receive a "200" response code and an object with the following layout:{ success: true, payload: expect.arrayContaining(ExpectedObject) }`, async () => {
      const expectedObject = {
         id: expect.any(Number),
         name: expect.any(String),
         chort: expect.any(String),
         date: expect.any(String),
         dailyfeedback: expect.any(String),
         workshoprating: expect.any(Number),
         guestlecturerating: expect.any(Number),
         userfeelingrating: expect.any(Number),
         bootcamperoftheweek: expect.any(String),
      };
      await request(app)
         .get("/users")
         .expect(200)
         .expect(function (res) {
            const actual = res.body;
            const expectedBody = {
               success: expect.any(Boolean),
               payload: expect.arrayContaining(expectedObject),
            };
            actual.payload.forEach(function (feedbackSection) {
               expect(feedbackSection).toEqual(expectedObject);
            });
         });
   });
   it(`Should send a get request to "/users/:id", receive a "200" response code and an object with the following layout:{ success: true, payload: expect.arrayContaining(ExpectedObject) } `, async () => {
      const expectedObject = {
         id: expect.any(Number),
         name: expect.any(String),
         chort: expect.any(String),
         date: expect.any(String),
         dailyfeedback: expect.any(String),
         workshoprating: expect.any(Number),
         guestlecturerating: expect.any(Number),
         userfeelingrating: expect.any(Number),
         bootcamperoftheweek: expect.any(String),
      };
      await request(app)
         .get("/users")
         .expect(200)
         .expect(function (res) {
            const actual = res.body;
            const expectedBody = {
               success: expect.any(Boolean),
               payload: expect.arrayContaining(expectedObject),
            };
            actual.payload.forEach(function (feedbackSection) {
               expect(feedbackSection).toEqual(expectedObject);
            });
         });
   });
   it(`Should send a post request to "/users", receive a "200" response code and an object with the following layout:{ success: true, payload: expect.ObjectContaining(ExpectedObject) } `, async () => {
      const expectedObject = {
         bootcamperoftheweek: expect.any(String),
         chort: expect.any(String),
         dailyfeedback: expect.any(String),
         date: expect.any(String),
         guestlecturerating: expect.any(Number),
         id: expect.any(Number),
         name: expect.any(String),
         userfeelingrating: expect.any(Number),
         workshoprating: expect.any(Number),
      };
      await request(app)
         .post("/users")
         .send({
            name: "Michael",
            chort: "9",
            date: "2022-01-20",
            dailyFeedBack: "yes test test",
            workShopRating: 3,
            guestLectureRating: 3,
            userFeelingRating: 3,
            bootcamperOfTheWeek: "Elliott",
         })
         .expect(200)
         .expect(function (res) {
            const actual = res.body;
            const expected = {
               success: expect.any(Boolean),
               payload: expect.arrayContaining([expectedObject]),
            };
            expect(actual).toStrictEqual(expected);
            actual.payload.forEach((feedback) => {
               expect(feedback).toStrictEqual(expectedObject);
            });
         });
   });

   it(`Should Get the user by the requested id, receive a "200" response code and an object with the following layout:{ success: true, payload: expect.ObjectContaining(ExpectedObject)`, async () => {
      const expectedObject = {
         id: expect.any(Number),
         name: expect.any(String),
         chort: expect.any(String),
         date: expect.any(String),
         dailyfeedback: expect.any(String),
         workshoprating: expect.any(Number),
         guestlecturerating: expect.any(Number),
         userfeelingrating: expect.any(Number),
         bootcamperoftheweek: expect.any(String),
      };

      await request(app)
         .get("/users/22")
         .expect(function (res) {
            const actual = res.body;
            const expectedBody = {
               success: expect.any(Boolean),
               payload: expect.arrayContaining(expectedObject),
            };
            actual.payload.forEach(function (feedbackSection) {
               expect(feedbackSection).toEqual(expectedObject);
            });
         });
   });

   it(`Should Delete the user by the requested id, receive a "200" response code and an object with the following layout:{ success: true, payload: expect.ObjectContaining(ExpectedObject)`, async () => {
      const expectedObject = {
         id: 22,
         name: "Michael",
         chort: "9",
         date: "2022-01-20",
         dailyfeedback: "yes test test",
         workshoprating: 3,
         guestlecturerating: 3,
         userfeelingrating: 3,
         bootcamperoftheweek: "Elliott",
      };

      await request(app)
         .delete("/users/22")
         .expect(function (res) {
            const actual = res.body;
            const expectedBody = {
               success: expect.any(Boolean),
               payload: expect.arrayContaining(expectedObject),
            };
            actual.payload.forEach(function (feedbackSection) {
               expect(feedbackSection).toEqual(expectedObject);
            });
         });
   });

   // it(`Should `, async () => {

   // })
});
