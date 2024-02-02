import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config({
  path: "./env",
});

//Db connection code 
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 9090, () => {
      console.log(`Server is Running at Port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoBD Connection failed", error);
  });
