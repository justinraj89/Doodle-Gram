const Artwork = require('../models/artwork');

function index(req, res) {
    Artwork.find({}, function(err, allArt){
        console.log(allArt, '<--- all the art');
        if(err) {
            res.send('You Have an Error')
        }
        res.render('artwork/index.ejs', {
            allArt: allArt
        });
    });  
}



function create(req, res){
    // console.log(req.body, '<-req.body')
    const artwork = new Artwork(req.body);
    artwork.save(function(err){
        if(err) return res.send('!ERROR!');
        console.log(artwork, '<----ARTWORK THAT GOT CREATED');
        res.redirect('/artwork');
    });
}





function newPost(req, res){
    res.render('artwork/new.ejs')
}

module.exports = {
    index,
    new: newPost,
    create
}


