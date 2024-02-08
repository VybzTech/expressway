const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require(`./routes/Router`);
// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";

// CONNECT THE DATABASE
const mysql = require("mysql");

// Server=localhost\MSSQLSERVER01;Database=master;Trusted_Connection=True;
const connection = mysql.createConnection({
  // connectionUri:
  // "Server=localhostMSSQLSERVER;Database=master;Trusted_Connection=True;",
  // host: "localhost\MSSQLSERVER",
  host: "localhost\\MSSQLSERVER",
  user: "DHARVO",
  password: "",
  database: "LogIn",
  // database: "master",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err?.code);
    return;
  }
  console.log("Connected to database!");
});

module.exports = connection;

// INTIALIZEEE THE APPP ON EXPRESS JS BACKEND
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
// const PORT =process?.env?.PORT|| 5000;
// console.log(`port: ${process?.env?.PORT}`);

const server = app.listen(PORT, () => {
  console.log(process?.env);
  console.log(process?.env?.PORT);
  // console.log(`Server is running on port: '${process?.env}'`);
});
