const express = require ("express");
const app = express();
const dotenv = require("doteenv");
const mongoose = require("mongoose");

doteenv.config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
     console.log('connected to dbl')      
);

// import Routes
const authRouth = require('./routes/auth');

// Route Middlewares
app.use('/api/user', authRote);

app.listen(3000, () => console.log('server up and running'));

