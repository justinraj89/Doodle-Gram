const Artwork = require('../models/artwork');



function index(req, res) {
    Artwork.find({}, function(err, allArt){
        if(err) {
            res.send('You Have an Error')
        }
        res.render('artwork/index.ejs', {
            artworks: allArt
        });
    });  
}


function show(req, res) {
    Artwork.findById(req.params.id, function(err, art) {
        res.render('artwork/show', {art: art})
    })
}


function create(req, res){
    req.body.userId = req.user.id,
    req.body.userName = req.user.name;
    const art = new Artwork(req.body);
    art.save(function(err){
        if(err) return res.send('!ERROR!');
        res.redirect('/artwork');
    });
}


function deletePost(req, res){
    Artwork.findOneAndDelete(
        {_id: req.params.id, userId: req.user._id },
        function(err) {
            res.redirect('/artwork');
        }
    )
}


function newPost(req, res){
    res.render('artwork/new.ejs')
}


function editPost(req, res){
    Artwork.findOne({ _id: req.params.id, userId: req.user._id}, function(err, post){
        console.log(post, '<----POST HERE')
        if(err || !post) return res.redirect('/artwork');
        res.render('artwork/edit', {post})
    });
}


function updatePost(req, res){
    Artwork.findOneAndUpdate(
        { _id: req.params.id, userId: req.user._id},
        req.body,
        {new:true},
        function(err, post) {
            if (err || !post) res.redirect('/artwork');
            res.redirect(`/artwork/${post._id}`);
        }
    );
}


module.exports = {
    index,
    new: newPost,
    create,
    show,
    deletePost,
    editPost,
    updatePost
}

