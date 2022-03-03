const mongoose = require('mongoose');

const featurSchema=new mongoose.Schema({
    Storage:{
        type:Number,
        //required:true
    },
    Color:{
        type:String,
        //required:true
    },
    Price:{
        type:Number,
        //required:true
    }
    
});


const mobileSchema=new mongoose.Schema({
    Name:{
            type:String,
            //required:true
        },
    Image:{
            type:String,
            //required:true
        },
    Feature:[featurSchema]
});

mongoose.model('Mobile',mobileSchema,'Mobiles');