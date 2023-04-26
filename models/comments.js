const mongoose = require('mongoose');
const commentsSchema = new mongoose.Schema({
    content: String,
    commentDate:{
        type:Date,
        default:Date.now
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})
const Comment = mongoose.model('Comment',commentsSchema);
module.exports = Comment