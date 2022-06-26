import mongoose from 'mongoose';

// var validateEmail = function(email) {
//     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(email)
// };

const postSchema=mongoose.Schema({
    name:String,
    isMarried:Boolean,
    gender:String,
    phoneNo:Number,
    Paddress:String,
    Taddress:String,
    fatherN:String,
    motherN:String,
    Qualification:String,
    wifeN:String,
    citizenshipNo:String,

    dateofbirth:Date,
    district:String,
    provinaced:String,
    municipality:String,
 
    selectedFile:String,
    
},{_id:true});

export const PostMessage=mongoose.model('PostMessage', postSchema);

const loginSchema=mongoose.Schema({
    officerId:String,
    officerpassword:String
})

export const LoginSchema= mongoose.model('loginSchema',loginSchema);
