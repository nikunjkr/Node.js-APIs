const dotenv = require('dotenv').config()
import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
//
// import skillroute from './src/routes/skillsRoutes'

const app = express();
const PORT = 8000 || process.env.PORT;

// mongoose connection
mongoose.Promise = global.Promise;
//for now database no database connection
mongoose.connect('process.env.DBURL', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

routes(app);
// routes(skillroute);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);