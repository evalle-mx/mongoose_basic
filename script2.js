// const mongoose = require('mongoose')
// require('dotenv').config()

const MongoDatabase = require('./Classes/MongoDatabase');

// var ATLAS_URI = process.env.ATLAS_URL;;

// mongoose.connect(
//     'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.icm9w.mongodb.net/mongoose-test?retryWrites=true&w=majority'
//     )

// const db = mongoose.connection

// db.once('open', () => {  //Do it just one time
//     console.log('Successfully connected to Mongo')
// })
// db.on('error', (e) => {  //DO it everytime detects an error 7888989
//     console.error('Error connecting/processing ');
//     console.log( e );
// })


testClass()

// class testing:
function testClass(){
    console.log('testClass');
 
    const mdb = new MongoDatabase()
    // console.log(mdb);
    mdb.greetStudent()
    mdb.getUrl()
}