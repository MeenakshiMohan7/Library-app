// Accessing Mongoose Package
const mongoose = require("mongoose");
// Creating Database connection
// mongoose.connect("mongodb://localhost:27107/Library");
mongoose.connect("mongodb+srv://Meenakshi:meenakshi1@firstsamplecluster.yclj3.mongodb.net/LibraryApp?retryWrites=true&w=majority");


// Schema Definition from Mongoose.Schema package
const Schema1 = mongoose.Schema;
// const bcrypt = require('bcrypt');

// Creating a new Schema named SignupSchema using constructor Schema
const SignupSchema = new Schema1({
    name: String,
    userid: {type: String,required:true },
    pwdid: {type: String,required:true }
});

// In order to use the new Schema created we need to create a Model using mongoose.model package ("Collection Name", "Schema Name")
const Signupdata = mongoose.model("signupdata",SignupSchema);

// Exporting the Model created (Signupdata)
module.exports = Signupdata;