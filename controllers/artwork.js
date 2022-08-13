const Artwork = require('../models/artwork');

function index(req, res) {
    res.render('artwork/index.ejs');
}

function newPost(req, res){
    res.render('artwork/new.ejs')
}

function create(req, res){
    console.log(req.body, '<--- req.body');




    res.redirect('/artwork')
}

module.exports = {
    index,
    new: newPost,
    create
}