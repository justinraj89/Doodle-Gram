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

async function deleteComment(req, res){
    try {
  
      const art = await Artwork.findOne({
        'comments._id': req.params.id
      });
  
      //if(!art) { res.redirect(`/artwork/${art._id}`); }
  
      art.comments.remove(req.params.id);
  
      await art.save();
      // redirect back to the page they came from!
      res.redirect(`/artwork/${art._id}`)
  
  
    } catch(err){
      console.error(err)
      res.send(err)
    }
  }




module.exports = {
    addComment,
    deleteComment
}