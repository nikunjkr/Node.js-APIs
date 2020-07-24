import {addNewSkills} from '../controllers/skillsController'

const skillroute = (app) =>{
    app.route('/skill')

    .get((res,req, next) =>{

        console.log('re')},
        addNewSkills)


    
}

export default skillroute;