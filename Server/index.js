const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require(`./routes/Router`);
require("dotenv").config();

// INTIALIZEEE THE APPP ON EXPRESS JS BACKEND
const app = express();
const PORT = process?.env?.PORT || 5000; // EXPECTED TO BE RUNNING ON 8000

app.listen(PORT, () => {
  console.log(`Server is running on port: '${PORT}'`);
});

// CONNECT THE DATABASE
const mysql = require("mysql");

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  // server: process.env.DB_SERVER,
  // connectTimeout: 60000,
  // options: {
  //   encrypt: true, // For Azure SQL Database Server connections
  //   trustServerCertificate: true,
  // },
};
// const dbConfig = {
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT,
// };
// console.log("Database Configuration: ", dbConfig);

//  CREATE A CONNECTION POOL
// (async function connectDB() {
//   try {
//     await mysql.connect(dbConfig);
//   } catch (err) {
//     console.error("Error connecting to DB: ", err);
//   }
// })();

const DBconnection = mysql.createConnection(dbConfig);
DBconnection.connect((err) => {
  console.log("Connecting db...");
  if (err) {
    console.error("Error connecting to database:", err?.stack, err?.code);
    throw err;
  }
  console.log("Connected to database!", DBconnection.threadId);
  let sqlQuery = "SELECT * FROM LogIn";
  DBconnection.createQuery(
    // );
    // DBconnection.query(
    sqlQuery,
    (e) => {
      if (e) {
        throw e;
      }
      res.send("Database selected... ");
    }
  );
});

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

// Use dbConfig in your database connection code
// (function databaseConnection() {
//   try {
//     connection.connect();
//     console.log("Connected to SQL Server");
//   } catch (err) {
//     console.error("Error connecting to SQL Server:", err?.code, err?.syscall);
//   }
// })();

// async function getDataFromTable() {
//   try {
//     const res = await connection.query(`SELECT * FROM SignUpDB`);
//     // mysql.query`SELECT * FROM SignUpDB`;
//     console.table(res.recordset);
//   } catch (e) {
//     console.error("Error querying the Database: ", e);
//   }
// }
// getDataFromTable();

// EXPORT THE CONNECTION
module.exports = DBconnection;
