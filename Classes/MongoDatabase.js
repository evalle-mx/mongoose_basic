const mongoose = require('mongoose')
require('dotenv').config()

class MongoDatabase {
    constructor() {
        this._Url=this.createServer()    //process.env.ATLAS_URL;
        this._className = 'unknown'
        this.connect()
    }

    createServer() {
        // const {
        //     AccessKeyId: accessKeyId,
        //     SecretAccessKey: secretAccessKey,
        //     SessionToken: sessionToken,
        // } = await this.getSTSCredentials();
        
        //return `mongodb+srv://${accessKeyId}:${secretAccessKey}@variant.brf4e.mongodb.net/test?authSource=%24external&authMechanism=MONGODB-AWS&authMechanismProperties=AWS_SESSION_TOKEN:${sessionToken}`;
      
        return `mongodb+srv://${process.env.accessKeyId}:${process.env.secretAccessKey}@${process.env.ATLAS_CLUSTER}?retryWrites=true&w=majority`;
    };

    connect(){
        mongoose.connect(this._Url)
        
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