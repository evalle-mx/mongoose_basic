const mongoose = require('mongoose')
require('dotenv').config()

class MongoDatabase {
    constructor() {
        this._Url=process.env.ATLAS_URL;
        this._className = 'unknown'
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
 
    set myName(anyName) {
        this._className = anyName;
    }
 
    get myName() {
        return this._className;
    }
 
    greetClass() {
        console.log(
            "Hello, ! My class name is " + this._className);
    }

    getUrl(){
        console.log(`returning value: ${this._Url}`);
        return this._Url
    }
}

module.exports = MongoDatabase;