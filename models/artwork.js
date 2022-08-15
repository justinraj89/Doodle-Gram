const mongoose = require('mongoose');

// const ratingSchema = new mongoose.Schema({
//     rating: { type: String},
//     userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
//     artworkId: {type: mongoose.Schema.Types.ObjectId, ref: 'Artwork'}
// })


const commentSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    comment: String,
    artworkId: {type: mongoose.Schema.Types.ObjectId, ref: 'Artwork'}
})



const artworkSchema = new mongoose.Schema({
    name: {type: String, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    description: String,
    img: {type: String, required: true}, 
    // ratings: [ratingSchema],
    comments: [commentSchema]
})



 module.exports = mongoose.model('Artwork', artworkSchema);