const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require(`./routes/Router`);
// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";

const app = express();

//  PARSE BODY EXACTLY LIKE THIS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOpts = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOpts));

//  SETUP ROUTES AFTER CORS & BODY PARSER
app.use("/", router);

const PORT = 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT??PORT}`);
});
