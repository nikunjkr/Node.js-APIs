import {addNewSkills} from '../controllers/skillsController'

const skillroute = (app) =>{
    app.route('/skill').get((res,req, next) =>{

        console.log(`Routes url ${req.originalUrl}`);
        addNewSkills
    })
}

export default skillroute;