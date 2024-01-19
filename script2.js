

const MongoDatabase = require('./Classes/MongoDatabase');




testClass()

// class testing:
function testClass(){
    console.log('testClass');
 
    console.log('testClass');
 
    const mdb = new MongoDatabase()
    // console.log(mdb);
    mdb.greetClass()
    mdb.getUrl()
}