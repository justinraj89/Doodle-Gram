const Artwork = require('../models/artwork');

function index(req, res) {
    res.render('artwork/index.ejs');
}

function newPost(req, res){
    res.render('artwork/new.ejs')
}

function create(req, res){
    console.log(req.body, '<--- req.body');
    console.log(req.body.name, '<-----req.body.name');
    console.log(req.body.description, '<-----req.body.description');




    res.redirect('/artwork')
}

module.exports = {
    index,
    new: newPost,
    create
}