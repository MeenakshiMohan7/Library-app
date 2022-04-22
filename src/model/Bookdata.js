// Accessing Mongoose Package
const mongoose = require("mongoose");
// Creating Database connection
// mongoose.connect("mongodb://localhost:27107/Library");
mongoose.connect("mongodb+srv://Meenakshi:meenakshi1@firstsamplecluster.yclj3.mongodb.net/LibraryApp?retryWrites=true&w=majority");

// Schema Definition from Mongoose.Schema package
const Schema = mongoose.Schema;

// Creating a new Schema named BookSchema using constructor Schema
const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
});


const Bookdata = mongoose.model("bookdata",BookSchema);

// Exporting the Model created (Bookdata)
module.exports = Bookdata