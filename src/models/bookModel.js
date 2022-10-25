const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( { 
    bookName : {
        type: String,
        unique: true,
        required: true
    },

    authorName : String,
    categories : String,       
    year : Number
    }, { timestamps: true });

module.exports = mongoose.model('Book', userSchema)