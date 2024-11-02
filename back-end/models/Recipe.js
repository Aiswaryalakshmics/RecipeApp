const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    // description:{
    //     type:String,
    //     required:true,
    // },
    // ingredients:{
    //     type:[String],
    //     required:true
    // },
    //steps:{
        // type:[String],
        // required:true
    // },
    imageUrl :{
        type:String     ,
       required:true
    },
    // cookTime:{
        //type:String,
        //required:true
    // },
    // createdBy:{
        // type:mongoose.Schema.Types.ObjectId,
        // ref :'User',
        //required:true 
    // },
    ratings:{
        type:[Number],
        default:[],
    }

});

const Recipe = mongoose.model('Recipe',recipeSchema);
module.exports = Recipe;