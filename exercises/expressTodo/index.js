const express = require("express");
const uuid = require ("uuid");
const bodyParser = require("body-parser");

const app = express();

let todo = require("./todo.js");

const port = 8080;

app.use(bodyParser.json());

app.route("/todo")
    .get((req, res) => {
        res.status(200).send(todo);
    })
    .post((req, res) => {
        const newTodo = req.body;
        newTodo._id =uuid();
        todo.push(newTodo);
        res.status(201).send(newTodo)
    });

app.route("/cats/")
    .get((req, res) => {
        const {id} = req.params;
        const monkeyBalls = todo.filter(todos => todos._id === id)[0];
        res.status(200).send(monkeyBalls);
    })

    .delete((req, res) => {
        const {id} =req.params;
        todo = todos.filter(todos => todos._id !== id);
        res.status(204).send();
    })

    .put((req, res) => {
        const {id} = req.params;
        let editedTodo = req.body;
        let todo = todo.map(todos => todos._id === id ? {...todos, ...editedTodo} : todos);
        res.status(200).send(editedTodo);
        });
app.listen(port, () => console.log("server running on port " + port));


