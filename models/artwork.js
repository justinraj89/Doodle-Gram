const mongoose = require('mongoose');


const artworkSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: {
        type: String,
        required: true
    },
})

 module.exports = mongoose.model('Artwork', artworkSchema);