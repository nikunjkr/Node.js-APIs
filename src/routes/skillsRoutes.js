import { addNewSkills } from '../controllers/skillsController'

const skillroute = (app) => {
    app.route('/skill')

        .get((res, req) => {
            console.log("Sending Skills")

        }, addNewSkills
        )



}

export default skillroute;