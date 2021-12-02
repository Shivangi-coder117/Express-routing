//require library
const mongoose = require('mongoose');
//connect to database
mongoose.connect('mongodb://localhost/contacts_list_db');

//acquire the connection to check if it is successfull
const db= mongoose.connection;

//check the error
db.on('error',console.error.bind(console,'error connecting to db'));
//up &running
db.once('open',function(){
    console.log('Successfuly connected to database');
});

module.exports = db;