const mongoose = require('mongoose')
require('dotenv').config()

const User = require('./schema/User')
const UniversityStudent = require('./Classes/UniversityStudent');

var ATLAS_URI = process.env.ATLAS_URL;
//'mongodb+srv://<username>:<pass>@<cluster.dnsname>.mongodb.net/crashCourse';
console.log(`ATLAS_URI: ${ATLAS_URI}`);

mongoose.connect(
    ATLAS_URI
    // , () => { console.log('connected');}  // throw new MongooseError('Mongoose.prototype.connect() no longer accepts a callback');
    // , e => console.error(e) 
    )

const db = mongoose.connection

db.once('open', () => {  //Do it just one time
    console.log('Successfully connected to Mongo')
})
db.on('error', (e) => {  //DO it everytime detects an error 7888989
    console.error('Error connecting/processing ');
    console.log( e );
})

// ## FINDALL (initial testing)
// findAll();

// ## CREATE
// storeUser()

// ## FIND
// findElem();

testClass()


async function findAll(){
    const users = await User.find();
    console.log(users);
    console.log(`  >>  ${users.length} users on collection: user << `);
}

async function findElem() {
    try {
        const user =
        await User.findById('65a994f47aeb7dfd7185c753');
        // await User.findOne({fullName:'x'});  //find, findOne, exists , *deleteOne

        ///Via Query
        // await User.where('age').gt(26).lt(33)
        // .where('fullName').equals('Sally').ne('Kyle')
        // .populate('bestFriend')    // Acts like JOIN
        // .limit(1)
        // .select('age fullName bestFriend')
        console.log(user===null?'No user (null)':user); 

    } catch (e) {
        console.log(e.message);
    }
}

async function storeUser(){
    try {
        const user = await User.create({
            fullName: "Netto",
            email: 'TEST@mail.com',
            age: 19 ,
            hobbies: ["Weight Lifting", "Bowling"],
            address: {street:"Main St "}
        })
        //user.bestFriend = '651b31cf9092397c7cb42043'
        await user.save();

        console.log(`user: ${user}`); 
    } catch ( e ) {
        console.error(e.message);
        //console.log(e.errors.age);
    }
}



// class testing:
function testClass(){
    console.log('testClass');
 
    const some = new UniversityStudent()
    console.log(some);
    some.greetStudent()
}