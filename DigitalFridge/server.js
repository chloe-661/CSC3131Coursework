const express = require("express");
const mongoose = require('mongoose');

const path = require('path');
const config = require('config');

const app = express();
app.use(express.json());

// used in production to serve client files
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

// connecting to mongoDB and then running server on port 4000
const dbURI = config.get('dbURI');
const port = process.env.PORT || 4000;


mongoose.connect(dbURI)
  .then((result) => {
    app.listen(port);
    console.log("Connected to the database!")
    })
  .catch((err) => console.log(err));





























// // const bodyParser = require("body-parser");
// // const cors = require("cors");

// const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

// // parse requests of content-type - application/json
// app.use(bodyParser.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Testing server.js file" });
// });

// // set port, listen for requests
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

// const db = require("./app/models");
// db.mongoose
//   .connect(db.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Connected to the database!");
//   })
//   .catch(err => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });