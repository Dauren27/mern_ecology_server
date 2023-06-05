require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const router = require("./router");
const errorMiddleware = require("./middlewares/error-middleware");
const ecoRouter = require("./router/eco.routes");
const newsRouter = require("./router/news.routes");
const app = new express();
const PORT = process.env.PORT || 5000;
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(cookieParser());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use("/api", router);
app.use("/api", ecoRouter);
app.use("/api", newsRouter);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(PORT, () => {
      console.log(`Server has started on PORT ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
