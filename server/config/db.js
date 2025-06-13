const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Database Connected!");
    }).catch((error)=> {
        console.log("Database Disconnected Error!", error);
    })