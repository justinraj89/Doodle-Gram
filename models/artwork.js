const mongoose = require('mongoose');


const artworkSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: String,
    img: String, 
})

 module.exports = mongoose.model('Artwork', artworkSchema);