const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const logger = require("./middleware/logger.js");
const catRouter= require("./routes/cats.js");
const agencyRouter = require ("./routes/agencies.js");

const app = express();

const port = 8080;

//middleware
app.use(bodyParser.json());
app.use(logger);

//routes

app.use("/cats", catRouter);
app.use("/agencies", agencyRouter);

mongoose.connect("mongodb://localhost:27017/animals", /*callback function is error notice that is in case the server can't be reached*/(err)=> {
    if (err) console.log(err);
    console.log("connected to MongoDB");
})

app.listen(port, ()=> console.log("server running on port " + port));
