const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    book_name : { type : String , required : true },
    published_year : { type : Number , required : true},
    author_id : 
    [   
        {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'authors',
        required : true ,
        }

    ],
    section_id : 
        { 
            type : mongoose.Schema.Types.ObjectId,
            ref : 'sections'
        }

 },
 {
     versionKey : false,
     timestamps : true,
 }
);

module.exports = mongoose.model('books',bookSchema)
