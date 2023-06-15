import mongoose from "mongoose";

const userschema =new mongoose.Schema({
    firstname :{
        type:String,
        required: true,
        trim :true,
        min :5,
        max:20

    },
    lastname:{
        type:String,
        required:true,
        trims :true,
        min :5,
        max:20
    },
    username:{
        type:String,
        required:true,
        trims :true,
        unique:true,
        index:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        trims :true,
        unique:true,
        lowercase:true
    },
    password:{
    type:String,
    required:true
    },

    phone :{
        type:String,
        

    }

});

const user = mongoose.model('user', userschema);

export default user;

