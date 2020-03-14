//express init
const express = require('express');
const app = express();

//mongoose init
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

//bodyParser for json
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//which port to run on
const port = process.env.PORT || 5000;

//routes
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");

//response
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api/users", users);
app.use("/api/tweets", tweets);

//open socket
app.listen(port, () => console.log(`Server is running on port ${port}`));
