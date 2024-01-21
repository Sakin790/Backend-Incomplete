import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

//This is corse origin resoure sharing configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);


app.use(express.json({ limit: "16kb" }));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));
app.use(cookieParser());
export { app };
