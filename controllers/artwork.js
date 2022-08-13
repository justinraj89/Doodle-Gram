const Artwork = require('../models/artwork');

function index(req, res) {
    res.render('artwork/index.ejs');
}

function newPost(req, res){
    res.render('artwork/new.ejs')
}

module.exports = {
    index,
    new: newPost
}