const mongoose = require('mongoose');

const tattooSchema = new mongoose.Schema({
    imageUrl: {
        type: String
    },
    style: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: Date
    }
})

module.exports = mongoose.model('Tattoo', tattooSchema, 'tattoos');