const express = require('express');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes/routes');

const app = express();
const port = process.env.PORT || 5000;


mongoose.set("strictQuery", true);

//Middlewares
app.use(express.json())
app.use(cors());
app.use(cookieParser())
app.use('/',routes);


mongoose.connect(
    "string de conexão mongoDB"
).then(()=> console.log('Connected to database'))
    .then(()=>{
        app.listen(port)
    }).catch((err) => console.log(err))