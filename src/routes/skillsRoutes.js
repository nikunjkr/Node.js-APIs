import { addNewSkills, getSkills } from '../controllers/skillsController'

// two middle ware passed in get 
const skillroute = (app) => {

    app.route('/skill')
        .get( (req,res,next) =>{
        
            console.log(`Request from ${req.originalUrl}`)
            console.log(`Request type ${req.method}`)
            next()

        },getSkills
        )
        .post((addNewSkills))

}

export default skillroute;