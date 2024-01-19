const mongoose = require('mongoose')
require('dotenv').config()

class MongoDatabase {
    constructor() {
        this.studentID = process.env.studentID;
        this._Url=process.env.ATLAS_URL;
        this._studentName = 'unknown'
        this.connect()
    }

    connect(){
        mongoose.connect(process.env.ATLAS_URL)
        
        const db = mongoose.connection
        
        db.once('open', () => {  //Do it just one time
            console.log('Successfully connected to Mongo')
        })
        db.on('error', (e) => {  //DO it everytime detects an error 7888989
            console.error('Error connecting/processing ');
            console.log( e );
        })
    }
 
    set studentName(studentName) {
        this._studentName = studentName;
    }
 
    get studentName() {
        return this._studentName;
    }
 
    greetStudent() {
        console.log(
            "Hello, ! Your university ID is " + this.studentID);
    }

    getUrl(){
        console.log(`returning value: ${this._Url}`);
        return this._Url
    }
}

module.exports = MongoDatabase;