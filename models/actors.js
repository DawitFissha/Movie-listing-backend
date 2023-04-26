//create a mongoose schema called actors

const mongoose = require('mongoose');

const actorSchema = mongoose.Schema({
    name: String,
    profilePic: String,
    age: Number,
})
const Actor = mongoose.model('Actor', actorSchema);
module.exports = Actor;