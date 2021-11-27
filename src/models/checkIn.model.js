const mongoose = require('mongoose');

const checkInSchema = new mongoose.Schema(
    {
        user_id : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'users',
            required : true,
        },
        book_id : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'books',
            required : true,
        }, 
    },
    {
        versionKey : false,
        timestamps : true,
    }
); 

module.exports = mongoose.model('checkin' , checkInSchema );