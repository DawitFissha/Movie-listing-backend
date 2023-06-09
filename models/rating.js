const mongoose = require('mongoose');
const ratingSchema = new mongoose.Schema({
    rating:Number,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})
const Rating = mongoose.model('Rating',ratingSchema);
module.exports = Rating;