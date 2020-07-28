import mongoose from 'mongoose'
//import skillSchema 
import {SkillsSchema} from '../models/skills';
//create a table called Skills 
const Skills =mongoose.model('Skills', SkillsSchema);

export const addNewSkills = (req, res) => {

    let skill=new Skills(req.body);
    //save take a callback
    skill.save(
        (err, skill) =>{
            if (err)
            {
                res.send(error);
            }
            else{
                res.json(skill);
            }

        }
    )
}
