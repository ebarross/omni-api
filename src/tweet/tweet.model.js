const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    author: {
        type: String
    },
    content: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Tweet', schema);