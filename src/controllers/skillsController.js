import mongoose from 'mongoose'
//import skillSchema 
import { SkillsSchema } from '../models/skills';
//create a table called Skills 
const Skills = mongoose.model('Skills', SkillsSchema);

export const addNewSkills = (req, res) => {

    let newSkill = new Skills(req.body);
    //save take a callback
    newSkill.save((err, skill) => {
        if (err) {
            res.send(err);
        }

        res.json(skill);
    })
    
}
export const getSkills = (req, res) => {
    Skills.find({}, (err, skill) => {
        if (err) {
            return console.log(err)
        }
        res.json(skill)

    })
}
