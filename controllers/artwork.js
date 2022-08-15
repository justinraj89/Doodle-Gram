const Artwork = require('../models/artwork');
const Comment = require('../models/artwork');

function index(req, res) {
    Artwork.find({}, function(err, allArt){
        // console.log(allArt, '<--- all the art');
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
    // console.log(req.body, '<-req.body')
    const art = new Artwork(req.body);
    art.save(function(err){
        if(err) return res.send('!ERROR!');
        // console.log("new artwork",art);
        res.redirect('/artwork');
    });
}


function addComment(req, res){
    Artwork.findById(req.params.id, function(err, art){
        console.log(art, '<---- art before the PUSH')

        art.comments.push(req.body)
        art.save(function(err){
            res.redirect(`/artwork/${req.params.id}`);
        })
        console.log(art, '<---ART AFTER THE PUSH')
    })
}



// function rateArtwork(req, res){
//     // console.log(req.body, '<-req.body')
//     Artwork.findById(req.params.id, function(err, art) {
//         console.log("art",art);
//         art.ratings.push(
//             new rating({
//                 userId: user._id,
//                 rating: req.body.rating
//             })
//         )
        
//         art.save();
//     })
// }



function newPost(req, res){
    res.render('artwork/new.ejs')
}

module.exports = {
    index,
    new: newPost,
    create,
    show,
    // rateArtwork,
    addComment
}


// function addComment(req, res){
//     console.log(req.user, '<---req.user here');
//     // console.log(req.body, '<-req.body')
//     Artwork.findById(req.params.id, function(err, art) {
//         // console.log("art",art);
//         // console.log(req.body, '<---req.body for add comment function here')

//         art.comments.push(
//             new Comment({
//                 userId: user._id,
//                 username: user.profile.name,
//                 comment: req.body.comment
//             })
//         )
//         art.save(function(err ){
//             res.redirect(`/artwork/${art._id}`);
//         });
//     })
// }
