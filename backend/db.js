require('dotenv').config();
const mongoose = require('mongoose')


const MONGODB_URI = process.env.MONGODB_URI
// mongoose.connect(MONGODB_URI)

// const MONGODB_URI_LOCAL = process.env.MONGODB_URI_LOCAL;

async function connectToDatabase(){
    await mongoose.connect(MONGODB_URI)
}
connectToDatabase()

const db = mongoose.connection;

db.on('connected',()=>{
    console.log(`data base connected`)
})

db.on('disconnected',()=>{
    console.log(`data base disconnected`)
})

db.on('error',(err)=>{
    console.log(`error occured to data base`+ err)
})

module.exports =  db
