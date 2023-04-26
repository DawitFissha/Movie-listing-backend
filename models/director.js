//create a mongoose schema called actors

const mongoose = require('mongoose');

const directorSchema = mongoose.Schema({
    name: String,
    profilePic: String,
    age: Number,
})
const Director = mongoose.model('Actor', directorSchema);
module.exports = Director;