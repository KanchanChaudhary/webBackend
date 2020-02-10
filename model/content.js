const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    contenttitle: {
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    }
})

const content = mongoose.model('content', contentSchema);
module.exports = content;