const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    user :{
        type : mongoose.Schema.ObjectId
    },
    //this defines the object id of the liked object
    likeable :{
        type : mongoose.Schema.ObjectId,
        require : true,
        refPath : 'offModel'
    },
    //this feild is used for defining the type of the liked objects since this is a dynamic refrence
    offModel:{
        type : String,
        required : true,
        enum: ['Post','Comment']
    }
},
{
    timestamps:true
});

const Like = mongoose.model('Like',likeSchema);
module.exports = Like;