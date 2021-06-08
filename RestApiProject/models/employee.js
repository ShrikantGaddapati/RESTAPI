const mongoose=require("mongoose");



//employees schema
const Employee=mongoose.model('Employee',
{
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    

});

module.exports={Employee}