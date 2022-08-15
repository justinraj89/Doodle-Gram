const Artwork = require('../models/artwork');



function addComment(req, res){
    Artwork.findById(req.params.id, function(err, art){
        
        req.body.userId = req.user._id;
        req.body.userName = req.user.name;
        req.body.artworkId = req.params.id;

        art.comments.push(req.body)
        art.save(function(err){
            res.redirect(`/artwork/${req.params.id}`);
        })
    })
}






module.exports = {
    addComment
}