const express = require("express");
const uuid = require("uuid");
const bodyParser = require("body-parser");

const app = express();

let cats = require("./cats.js");

const port = 8080;

//middleware
app.use(bodyParser.json());

//routes
app.route("/cats")
    .get((req, res) => {
        res.status(200).send(cats);
    })
    // post request:
    //convert request body to JSON
    //provide an id to the data (cat) being added
    .post((req, res) => {
        //give data in request body to the 'database'
        const newCat = req.body;
        newCat._id = uuid();
        //save the data in request body to the 'database'
        cats.push(newCat);
        //send back the data that was added
        res.status(201).send(newCat);
    });

//GET one request
//any request to the 'cats/id endpoint will be sent back to the cat matching that id
app.route("/cats/:id/:pants/:strawberry/:razzledazzle")
    .get((req, res) => {
        //get param id:
        const {id} = req.params;
        const foundCat = cats.filter(cat => cat._id === id)[0];/*array send back an array, which is why index 0 is included*/
        //send back cat
        res.status(200).send(foundCat);
    })
    //DELETE one request
    .delete((req, res) => {
        const {id} =req.params;
        //find and remove cat matching id:
        cats = cats.filter(cat => cat._id !== id);
        //send back the cat
        res.status(204).send();
    })
    //put one
    .put((req, res) => {
        //find the param id
        const {id} =req.params;
        let editedCat =req.body;
        //map through cats and replace the cat w/ matching id with req.body
        cats = cats.map(cat => cat._id === id ? {...cat, ...editedCat} : cat);
        res.status(200).send(editedCat);

    })

app.listen(port, () => console.log("Server running on port " + port));

