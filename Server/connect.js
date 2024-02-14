// CONNECT THE DATABASE
const mysql = require("mysql");

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  //   // server: process.env.DB_SERVER,
  connectTimeout: 60000,
  options: {
    encrypt: true, // For Azure SQL Database Server connections
    trustServerCertificate: true,
  },
};

// // const dbConfig = {
// //   host: process.env.DB_HOST,
// //   user: process.env.DB_USER,
// //   password: process.env.DB_PASSWORD,
// //   database: process.env.DB_NAME,
// //   port: process.env.DB_PORT,
// // };
// // console.log("Database Configuration: ", dbConfig);

// //  CREATE A CONNECTION POOL
// // (async function connectDB() {
// //   try {
// //     await mysql.connect(dbConfig);
// //   } catch (err) {
// //     console.error("Error connecting to DB: ", err);
// //   }
// // })();
const DB = mysql.createConnection(dbConfig);

// // export default DBconnection;
// // DBconnection.connect((err) => {
// //   console.log("CONNECTING DB...");
// //   if (err) {
// //     console.error("Error connecting to database:", err , err?.code);
// //     throw err;
// //   }
// //   console.log("Connected to database!", DBconnection.threadId);
// // });

// // Use dbConfig in your database connection code
// // (function databaseConnection() {
// //   try {
// //     connection.connect();
// //     console.log("Connected to SQL Server");
// //   } catch (err) {
// //     console.error("Error connecting to SQL Server:", err?.code, err?.syscall);
// //   }
// // })();

// // async function getDataFromTable() {
// //   try {
// //     const res = await connection.query(`SELECT * FROM SignUpDB`);
// //     // mysql.query`SELECT * FROM SignUpDB`;
// //     console.table(res.recordset);
// //   } catch (e) {
// //     console.error("Error querying the Database: ", e);
// //   }
// // }
// // getDataFromTable();

// // EXPORT THE CONNECTION
module.exports = DB;
