import connectDB from "./db/index.js";
import dotenv from "dotenv"
import {app} from "./app.js"

dotenv.config({
    path:"./env"
})


connectDB()
.then(()=> {

    app.on("error", (error)=> {
        console.log("Error:",error);
    }),
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`server is running at port ${process.env.PORT}`);
    })
}
)
.catch(err=>console.log("Mongo DB connection failed!!",err))

//OR

// import { DB_NAME } from "./constants"
// import mongoose from "mongoose";
// import express from "express";

// const app = express()

//     //database Connection to MongoDB Atlas 
//     //using the immediately invocked function
//     ; (async () => {
//         try {
//             await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

//             //implementing app listeners if in any case db is connected by express is not able to communicate with DB
//             app.on("error", () => {
//                 console.log("ERR:", error);
//                 throw error
//             })

//             app.listen(process.env.PORT, () => {
//                 console.log(`server is running at port ${process.env.PORT}`);
//             })
//         } catch (error) {
//             console.log("Error:", error);
//             throw error;
//         }
//     })()