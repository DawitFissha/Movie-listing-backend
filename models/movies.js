// create a mongoose schema called Movies

const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title:String,
    description:String,
    traillerLink:String,
    yearOfRelase:Date,
    duration:String,
    rating:Number,
   // array of image links
    images:[{
        type:String
    }],
    actors:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Actor'
        }
    ],
    directors:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Director'
        }
    ],
    categories:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Category'
        }
    ],
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ]

})
const Movie = mongoose.model('Movie',movieSchema);
module.exports = Movie;