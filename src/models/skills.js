//import mongoose 
import mongoose from 'mongoose';


//create a Schema 
const Schema=mongoose.Schema;

//export interstSchema object of type mongoose.Schema
export const SkillsSchema =new Schema({
    'Name':{
        type:String,
        required : 'Enter Your Name'
    },
    'Programming_language':{
        type : String,
        required : 'Enter Your favoite programming language'
    },
    'Technical_Skills':{
        type : String,
        
    },
    'Experience':{
        type : String,
        required : 'Enter Experience in years'
        
    },

    'creater_date': {
        type: Date,
        default : Date.now,

    }
})