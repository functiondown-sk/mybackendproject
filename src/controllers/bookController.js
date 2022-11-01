const publisherModel= require("../models/publisherModel")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const mongoose = require('mongoose');

const createBook= async function (req, res) {
    let book= req.body
    
    if (!book.author_id){
        res.send("Author Id is required")
    }
    else if (!book.publisher_id) {
        res.send("Publisher Id is required")
    }
    if (!mongoose.Types.ObjectId.isValid(book.author_id)) {
        res .send("Author Id is Wrong!")
    }
    else if(!mongoose.Types.ObjectId.isValid(book.publisher_id)) {
        res.send ("Pulisher Id is Wrong!")
    }
    else { let newbook = await bookModel.create(book)
    res.send({data: newbook})
   }
}
    

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate('author_id').populate('publisher_id')
    res.send({data: books})
}

const putNewBook = async function (req, res) {
    let Penguin = await publisherModel.findOne({ name: "Penguin" });

    let HarperCollins = await publisherModel.findOne({ name: "HarperCollins" });

    let newbooks = await bookModel.updateMany(
        { publisher_id: [Penguin, HarperCollins] },
        { $set: { isHardCover: true } },
        { new: true }
    );
    let updatedbooks = await bookModel.find({ newbooks }).populate('author_id').populate('publisher_id');
    res.send({ data: updatedbooks });
};
const updateRating = async function (req, res) {
    let arr1 = await authorModel.find({ rating: { $gt: 3.5 } });
    // console.log(arr1)
    let newarr = [];
    for (i of arr1) {
    
        id = i._id;
        let tosend = await bookModel.findOneAndUpdate(
            { author: id },
            { $inc: { price: 10 } },
            { new: true }
        ).populate('author_id').populate('publisher_id');
        newarr.push(tosend);
    }
    res.send({ mes: newarr });
}
// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.putNewBook=  putNewBook
module.exports.updateRating= updateRating


// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
