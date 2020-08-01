import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

// Create a collection tabel Contact
const Contact = mongoose.model('Contact', ContactSchema);
//create a table calles Skills 


export const addnewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

export const getContactWithID = (req, res) => {
    Contact.findById(req.params.contactID, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({ _id: req.params.contactID}, req.body, { new: true, useFindAndModify: false }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

export const deleteContact = (req, res) => {
    Contact.remove({ _id: req.params.contactID}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'successfuly deleted contact'});
    });
}

const myContact=new Contact({
    firstName: "Nikunj  ",
    lastName: "Kumar  ",
    email: "CODING@JAVASCRIPT.com",
    phone:2333442
})
//then function call after Promise
myContact.save().then(()=>{
    console.log(myContact)

}).catch(err=>{
    console.log(err);
})