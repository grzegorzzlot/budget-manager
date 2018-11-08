const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CategorySchema = new Schema({
    author: ObjectId,
    name: String
});

module.exports = mongoose.model('Category', CategorySchema);