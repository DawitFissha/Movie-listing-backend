const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    genera:String,

})
const Category = mongoose.model('Category',categorySchema);
module.exports = Category