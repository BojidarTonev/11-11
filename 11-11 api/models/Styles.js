const mongoose = require('mongoose');

const styleSchema = new mongoose.Schema({
    name: {
        type: String
    }
})

module.exports = mongoose.model('Style', styleSchema, 'styles');