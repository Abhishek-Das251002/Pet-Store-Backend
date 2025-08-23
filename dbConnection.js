const mongoose = require("mongoose")
require("dotenv").config()

const connectionUrl = process.env.MONGODB

async function makeDbConnection(){
    await mongoose
    .connect(connectionUrl)
    .then(() => {console.log("successfully connected to database")})
    .catch((error) => {console.log("error occured while connecting to database",error)})
} 

module.exports = {makeDbConnection}


