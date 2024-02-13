import express from "express";
import dotenv from "dotenv";
import dbconnect from "./config/database.js";
import studentRoute from "./routers/stundent.router.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 4001;
app.use(cors());
dbconnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(studentRoute);

app.use("/home", (req, res) => {
  res.send("home  successfully");
});

app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});
