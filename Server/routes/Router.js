//  SETUP ROUTES HERE
const express = require("express");
const DB = require("../connect");

const router = express.Router();

router.get("/", (req, res) => {
  const SQLGet = "SELECT * FROM LogIn";

  // const mysql = require("mysql");

  // const dbConfig = {
  //     host: process.env.DB_HOST,
  //     user: process.env.DB_USER,
  //     password: process.env.DB_PASSWORD,
  //     database: process.env.DB_NAME,
  //     port: process.env.DB_PORT,
  // server: process.env.DB_SERVER,
  // connectTimeout: 60000,
  // options: {
  //   encrypt: true, // For Azure SQL Database Server connections
  //   trustServerCertificate: true,
  // },
  // };
  // let sqlQuery = "SELECT * FROM LogIn";
  // const Values = [];
  // DB.query(SQLGet, [], (e, data) => {
  //   if (e) return res.status(500).send(e);
  //   // if (data.length) return res.status(409).json("User already exists");

  //   // });
  //   // DBconnection.query(sqlQuery, (e) => {
  //   //   if (e) {
  //   //     throw e;
  //   //   }
  //   res.send("Database selected... ");
  // });
  console.log("reqBody", req);
  // res.json({message:"ok"})
  res.send({ message: "This is Home Page API" });
});

// SENDING POST REQUEST FROM CONTACT FORM URL
router.post("/contact", (req, res) => {
  const { user, msg } = req.body;
  console.log(
    `This is your name ${user}, and you wish to relay this message: "${msg}".`
  );
  res.send("Message sent successfully");
});

//  GETTING A LIST OF USER FROM AN API
router.get("/users", (req, res) => {
  //  PULL USER DATA HERE
  const userData = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653",
        },
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications",
      },
    },
    // {
    //   id: 4,
    //   name: "Patricia Lebsack",
    //   username: "Karianne",
    //   email: "Julianne.OConner@kory.org",
    //   address: {
    //     street: "Hoeger Mall",
    //     suite: "Apt. 692",
    //     city: "South Elvis",
    //     zipcode: "53919-4257",
    //     geo: {
    //       lat: "29.4572",
    //       lng: "-164.2990",
    //     },
    //   },
    //   phone: "493-170-9623 x156",
    //   website: "kale.biz",
    //   company: {
    //     name: "Robel-Corkery",
    //     catchPhrase: "Multi-tiered zero tolerance productivity",
    //     bs: "transition cutting-edge web services",
    //   },
    // },
    // {
    //   id: 5,
    //   name: "Chelsey Dietrich",
    //   username: "Kamren",
    //   email: "Lucio_Hettinger@annie.ca",
    //   address: {
    //     street: "Skiles Walks",
    //     suite: "Suite 351",
    //     city: "Roscoeview",
    //     zipcode: "33263",
    //     geo: {
    //       lat: "-31.8129",
    //       lng: "62.5342",
    //     },
    //   },
    //   phone: "(254)954-1289",
    //   website: "demarco.info",
    //   company: {
    //     name: "Keebler LLC",
    //     catchPhrase: "User-centric fault-tolerant solution",
    //     bs: "revolutionize end-to-end systems",
    //   },
    // },
  ];
  res.send(userData);
});

/*  SENDING A POST REQUEST FROM OUR LOGIN  API
router.post("/api/login", showCookies, async (req, res) => {
  const { identifier, password } = req.body;
  console.log(identifier, password);
  const login_res = await axios({
    method: "POST",
    url: "authUrl",
    data: { identifier, password },
  });
  req.jwt = login_res.data.jwt;
  req.session.jwt = login_res.data.jwt;
  console.log("POST Api  api/login/");
  res.send(login_res.data);
});

//  GETTTING CLIENT SECRET FROM THE API
router.post("/api/secret", requiresAuth, async (req, res) => {
  const token = req.session.jwt;
  const secret_res = await axios({
    method: "GET",
    url: "authurl",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  res.send(secret_res.data);
});

*/

// HANDLES ANY REQUEST THAT DOESN'T MATCH THE ONES ABOVE
router.get("*", (req, res) => {
  console.log("No matching API" + req?.body, req);
  res.sendFile(path.join(__dirname + "client/build/index.html"));
});

module.exports = router;
