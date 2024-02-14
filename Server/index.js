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
