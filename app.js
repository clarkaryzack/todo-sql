const express = require('express');
const bodyparser = require('body-parser');
const mustacheexpress = require('mustache-express');
const models = require('./models');

var app = express();

app.engine('mustache', mustacheexpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
// app.use(expressValidator());


app.get("/", function (req, res) {
  let todo;
  models.ToDoList.findAll().then(function (todolist) {
    res.render('index', { ToDoList: todolist});
  });
});

app.post("/", function (req, res) {

  // req.checkBody("toDoItem", "You must enter a todo!").notEmpty();

  // var errors = req.validationErrors();
  // if (errors) {
    // res.render('error.mst');
  // } else {
    let todo = models.ToDoList.build({
      name: req.body.newTodo,
      complete: false
    });
    todo.save().then(function (newTodo) {
    })
    res.redirect('/');
  // }
})

app.listen(3000, function() {
  console.log("Started express application!");
});
