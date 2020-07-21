//import mongoose 
import mongoose from 'mongoose';

//create a Schema 
const Schema=mongoose.Schema;

//export interstSchema object of type mongoose.Schema
export const interestSchema =new Schema({
    'Name':{
        type:String,
        required : 'Enter Your Name'
    },
    'Programing language':{
        type : String,
        required : 'Enter Your favoite programming language'
    },
    'Technical Skills':{
        type : String,
        
    },
    'creater_date': {
        type: Date,
        default : Date.now,

    }
})