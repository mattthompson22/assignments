const express = require("express");
const runRouter = express.Router();

const RunModel = require("../models/run.js");

runRouter.route("/")
    .get((req, res) => {
        RunModel.find(req.query)
        .exec((err, foundRuns) => {
            if (err) return res.send(err);
            res.status(200).send(foundRuns)
        });
    })
    .post((req, res) => {
        const newRun = new RunModel(req.body);
        newRun.save((err, savedRun) => {
            if (err) return res.send(err);
            return res.send(savedRun);
        });
    });
runRouter.route("/:id")
    .get((req, res) => {
        RunModel.findOne({_id: req.params.id}, (err, foundRun) => {
            if (err) return res.send(err);
            if (!foundRun) return res.status(404).send({message: "Ran Away"});
            res.status(200).send(foundRun)
        })
    })
    .delete((req, res) => {
        RunModel.findOneAndRemove({_id: req.params.id}, (err, deletedRun) => {
            if (err) return res.send(err);
            if (!deletedRun) return res.status(404).send({message: "This entry has been deleted"});
                res.status(204).send()
        })
    })
    .put((req, res) => {
        RunModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, updatedRun) => {
            if(err) res.send(err);
            if(!updatedRun) return res.status(404).send({message: "Run not found"});
                res.status(200).send(updatedRun)
        })
    })

module.exports = runRouter;