// Accessing Mongoose Package
const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27107/Library"); Library --> Database name
mongoose.connect("mongodb+srv://Meenakshi:meenakshi1@firstsamplecluster.yclj3.mongodb.net/LibraryApp?retryWrites=true&w=majority");

// Schema Definition from Mongoose.Schema package
const Schema = mongoose.Schema;

// Creating a new Schema named BookSchema using constructor Schema
const AuthorSchema = new Schema({
    title: String,
    about: String,
});

// In order to use the new Schema created we need to create a Model using mongoose.model package ("Collection Name", "Schema Name")
const Authordata = mongoose.model("authordata",AuthorSchema);

// Exporting the Model created (Bookdata)
module.exports = Authordata