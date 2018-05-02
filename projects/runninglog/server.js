const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const morgan = require("morgan");
const runRouter = require("./routes/run.js");

const app = express();

const port = process.env.PORT || 8000;

app.use(bodyParser.json());
// app.use(morgan("dev"));
//routes

app.use("/run", runRouter);

mongoose.connect("mongodb://localhost:27017/run", (err) => {
    if (err) console.log(err);
    console.log("Connected to Database");
});

app.listen(port, ()=> {
    console.log("Server is running on port " + port)
})