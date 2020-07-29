const dotenv = require('dotenv').config()
import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
//
import skillroute from './src/routes/skillsRoutes' ;

// const connectionURL ='mongodb://127.0.0.1:27017 ';
const connectionURL = process.env.DBURL;
const app = express();
const PORT = process.env.port;

// mongoose connection
mongoose.Promise = global.Promise;
//no ' ' for env DBURL
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

// bodyparser setup global middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

skillroute(app);
// routes(skillroute);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => {
    
    console.log(`Your server is running on port ${PORT}`)
}
);