const express = require("express");
const Authordata = require("../model/Authordata");
const addauthorRouter =express.Router();
const multer = require('multer');
const path = require('path');

require("dotenv")
  .config();


// Multer Setting Up
const storage=multer.diskStorage({
    //destination for files
    destination:function(request,file,cb){
      cb(null,'../LibraryApp/public/uploads/images');
    },
    //Add back the extensions
    filename:function(request,file, cb){
     // Defining file name+timestamp+.file-extension
      cb(null,file.fieldname+Date.now()+path.extname(file.originalname));
    }
  })
  
  //Upload parameters for multer
  
  const upload = multer({ 
    storage: storage,
    limits:{
      fileSize: 1000000     //upto 1MB files only
    },
    fileFilter:function(req,file,cb){
      checkFileType(file, cb);
    }
  });
  
  
  //Checking file types we are inputing
  
  function checkFileType(file, cb){
  
    // Only Image type extension
    const filetypes = /jpeg|jpg|png|gif/; 
    //Checking extension
    const extname=filetypes.test(path.extname(file.originalname).toLowerCase());
    //Check mime
    const mimetype=filetypes.test(file.mimetype);
    if(mimetype&&extname){
      return cb(null, true);
    }else{
      cb('Error: Only Images allowed');
    }
  }



function router(nav){
    
    // Add Authors Page rendering
    addauthorRouter.get('/',(req,res)=>{
        res.render("addAuthor",{nav,
        title:'Add Author'});
    });
    
    // Adding the Authors
    addauthorRouter.post('/add',upload.single(`image`),(req,res)=>{
        // res.send("Hi I am Added")
       let item = {
           title: req.body.title,
           image: req.body.image,
           about: req.body.about
        } 
        Authordata.create(item, (err, item) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(item)
                let author= Authordata(item);
                author.save(); //Saving in Database
                res.redirect("/authors"); //Redirecting to Books page once new book is added
                }
                });
        
    });

    return addauthorRouter
}

module.exports =router;