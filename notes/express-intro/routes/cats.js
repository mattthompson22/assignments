const express = require("express");
const catRouter = express.Router();

const uuid = require("uuid");
const CatModel = require("../models/cats.js");

//actual routes go here
catRouter.route("/")
    .get((req, res) => {
        //use find() to retrieve
        CatModel.find(req.query)
            .populate("agencyId")
            .exec((err, foundCat) => {
            
                if (err) res.send(err);
                else 
                    res.status(200).send(foundCat);
            })  
    })
    // post request:
    //convert request body to JSON
    //provide an id to the data (cat) being added
    .post((req, res) => {
        //use save() to add a cat to the database
        const newCat = new CatModel(req.body);
        newCat.save((err, savedCat) => {
            if(err) return res.send(err);
            CatModel.populate(savedCat, {path: "agencyId"}, (err, popCat) => {
                if (err) return res.send(err);
                res.status(201).send(popCat);   
                
            });   
        });
    });
//GET one request
//any request to the 'cats/id endpoint will be sent back to the cat matching that id
catRouter.route("/:id")
    .get((req, res) => {
        //use findOne() to get a particular cat
        CatModel.findOne({_id: req.params.id}, (err, foundCat) => {
            if (err) return res.send(err);
            if(!foundCat) return res.status(404).send({message: "cat gone"}); 
                res.status(200).send(foundCat)
        })  
    })
    //DELETE one request
    .delete((req, res) => {
        //use findByIdAndRemove(_id: req.params.id, ()=>...)
        CatModel.findOneAndRemove({_id: req.params.id}, (err, deletedCat)=> {
            if (err) 
                return res.send(err);
            if(!deletedCat) return res.status(404).send({message: "cat gone"}); 
            res.status(204).send()
        }) 
    })
    //put one

    .put((req, res) => {
        //use findByIdAndUpdate(req.params.id,()=> ...)

        CatModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, updatedCat) => {
            if(err) res.send(err);
            if(!updatedCat) return res.status(404).send({message: "cat not found"});
                res.status(200).send(updatedCat)
        })
    })


module.exports = catRouter;