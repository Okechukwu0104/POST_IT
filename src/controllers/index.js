const express = require ("express");
const app = express();
const dotenv = require("doteenv");
const mongoose = require("mongoose");

dotenv.config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
     console.log('connected to dbl')      
);


const comment = require ("../controllers/comment.controller");
const user = require ("../controllers/user.controller");
module.exports= {
    comment,
    user
};
