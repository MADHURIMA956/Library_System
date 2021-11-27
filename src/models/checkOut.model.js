const mongoose = require('mongoose');

const checkOutSchema = new mongoose.Schema(
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
)

module.exports = mongoose.model( 'checkout', checkOutSchema);