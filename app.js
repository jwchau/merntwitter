//initialization
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

//which port to run on
const port = process.env.PORT || 5000;


//response
app.get("/", (req, res) => res.send("Hello World!"));

//open socket
app.listen(port, () => console.log(`Server is running on port ${port}`));
