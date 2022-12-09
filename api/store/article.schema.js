const mongoose = require('mongoose');

const schema = mongoose.Schema({
    articleId: Number,
    link: String,
    title: String,
    content: String,
    date: Date,
});



module.exports = schema;