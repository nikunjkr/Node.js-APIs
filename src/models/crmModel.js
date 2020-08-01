import mongoose from 'mongoose';
import validator from 'validator';

// Create a Class 
const Schema = mongoose.Schema;

// create a ContactSchema object 
export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name',
        trim:true
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String,
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("Invlid EmailID");
            }

        },
        required:'Enter Email ID',
        lowercase: true

    },
    company: {
        type: String
    },
    phone: {
        type: Number,
        validator(value){
            if(!validator.isMobilePhone())
                throw Error("Invalid Mobile Number")
        },
        trim:true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

