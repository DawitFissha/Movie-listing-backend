const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    comments:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    },
    favourites:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Movie'
    }
});
const User = mongoose.model('User', userSchema);

module.exports = User;