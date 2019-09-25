const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;