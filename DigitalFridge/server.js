const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const path = require('path');
const config = require('config');

const authRoutes = require('./routes/auth');

const app = express();
const dbURI = config.get('dbURI');
const port = process.env.PORT || 4000;

//Database Configuration
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.log({ database_error: err });
  });


//Registering Cors & Body Parser
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configure Morgan
app.use(morgan("dev")); // configire morgan

  //Define Routes
app.get("/", (req, res) => {
  console.log("Testing");
});

app.use("/user", authRoutes);
app.listen(port, () => {
  console.log(`App is running on ${port}`);
});


// app.use(express.json());

// app.use('/api',authRoutes);

// // used in production to serve client files
// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
//     app.get('*', (req, res) => {
//       res.sendFile(path.resolve(__dirname,'client','build','index.html'));
//     });
// }

// // connecting to mongoDB and then running server on port 4000
// const dbURI = config.get('dbURI');
// const port = process.env.PORT || 4000;

// mongoose.connect(dbURI)
//   .then((result) => {
//     app.listen(port);
//     console.log("Connected to the database!")
//     })
//   .catch((err) => console.log(err));