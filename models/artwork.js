const mongoose = require('mongoose');


const artworkSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: String,
    img: String, 
})

const commentSchema = new mongoose.Schema({
    profileId: String,
    comment: String,
    artworkId: {type: mongoose.Schema.Types.ObjectId, ref: 'Artwork'}
})



 module.exports = mongoose.model('Artwork', artworkSchema);