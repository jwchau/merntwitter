//express init
const express = require('express');

//invoke express
const app = express();


//mongoose init
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));
    
//routes
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
    
//passport (jwt strategy token thing)
const passport = require('passport');
require('./config/passport')(passport);
    
    
//bodyParser for json
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//which port to run on
const port = process.env.PORT || 5000;

//use routes
app.use("/api/users", users);
app.use("/api/tweets", tweets);

//response
// app.get("/", (req, res) => res.send("Hello World!"));
app.use(passport.initialize());

//open socket
app.listen(port, () => console.log(`Server is running on port ${port}`));

//
const path = require('path');
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}