const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema(
    {
        user_id : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'users',
            required : true,
        },

    },
    {
       versionKey : false,
        timestamps : true
    }
);

module.exports = mongoose.model( 'authors' , authorSchema);