



const express = require('express');
const express = require('express');                //require express 
const mongoose = require('mongoose');              //access mongoDB atlas through mongoose 
const bodyParser = require ('body-parser');

const app = express();                             //invoke express

//import routes
const postRoutes = require('./routes/posts');

//app middleware
app.use(bodyParser.json());

//route middleware
app.use(postRoutes);


const PORT = 8000;                                 //port
const DB_URL = 'mongodb+srv://Dilan:Dilan924@mernapp.cdujysl.mongodb.net/mernCrud?retryWrites=true&w=majority'

mongoose.connect(DB_URL)                           //Database Connection 
.then(()=>{
 
    console.log('DB Connected');

}) 
.catch((err) => console.log('DB connection error',err));

app.listen(PORT, () =>{

    console.log(`App is running on ${PORT}`);
    
});