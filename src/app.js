const express = require('express');
const dotenv = require('dotenv');
const db =require('./config/database.js')
const Auth = require('./routers/auth_router.js');
const Course = require('./routers/post_router.js')
const cors =require('./middleware/cors.js')

dotenv.config();

const app = express();
db()



app.use(express.json());
app.use(cors);

app.use('/', Auth);
app.use('/', Course);



module.exports = app;