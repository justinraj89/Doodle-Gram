const Artwork = require('../models/artwork');

function index(req, res) {
    res.render('artwork/index.ejs');
}

module.exports = {
    index
}