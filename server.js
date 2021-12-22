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
const port = process.env.PORT || 3000;

//Database Configuration
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.log({ database_error: err });
  });

  require('dotenv').config()

//Registering Cors & Body Parser
app.use(cors());

app.get('/s3', (req, res) => {
  // get the params from the initial request
  const fileName = req.query.filename
  const fileType = req.query.filetype
  const ext = path.extname(fileName)

  // define the location and the file name
  const pathName = path.join('myfoldertest', 'myuploadedfile' + ext)

  const s3 = new aws.S3()

  // configure the S3 object to get the token
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: pathName,
    Expires: 60 * 15,
    ContentType: fileType,
    ACL: 'public-read'
  }

  // ask for the token
  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      return res.status(500).json(err)
    }

    const returnData = {
      signedRequest: data,
      url: `${pathName}`
    }

    // returning the token to the frontend
    res.status(200).json(returnData)
  })
})




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