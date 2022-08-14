const Artwork = require('../models/artwork');

function index(req, res) {
    Artwork.find({}, function(err, allArt){
        console.log(allArt, '<--- all the art');
        if(err) {
            res.send('You Have an Error')
        }
        res.render('artwork/index.ejs', {
            artworks: allArt
        });
    });  
}

function show(req, res) {
    console.log(req.params, '<---req.params right HERE');
    Artwork.findById(req.params.id, function(err, art) {
        console.log(art, '<---art right here')
        res.render('artwork/show', {art: art})
    })
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
    create,
    show
}


