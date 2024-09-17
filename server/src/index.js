import dotenv from "dotenv";
import { app } from "./app.js";
import dbConnect from "../src/db/index.js";

dotenv.config({
  path: "./.env",
});

dbConnect()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection Faild", err);
  });
