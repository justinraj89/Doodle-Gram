const Artwork = require('../models/artwork');


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function index(req, res) {
    Artwork.find({}, function(err, allArt){
        allArt =shuffle(allArt)
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
}

