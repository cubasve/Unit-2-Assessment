const Todo = require('../models/todo');

module.exports = {
    index,
    create,
    deleteTodo,
}

function index(req, res) {
    res.render('index', { todos: Todo.getAll() });
}

function create(req, res) {
    Todo.create(req.body); //below line is equivalent
    // Todo.getAll().push(req.body); //todos = array from models folder
    res.render('index', { todos: Todo.getAll() });
    //     Todo.save(function (err, todo) {
    //         res.render('/', { todos });
    //     });
}

function deleteTodo(req, res) {
    Todo.deleteOne(req.params.id);
    // res.render('index', { todos: Todo.getAll() }); --> gives us URL parameters
    res.redirect('/');
}
