const mongoose = require('mongoose');
const URL = "mongodb://localhost:27017/student"

const dbconnection = async()=>{
  try {
    await mongoose.connect(URL) 
    //await -> waits t=for the resposnse and makes sure it connects to the particular link
    
    console.log("Database connected!")  //imp
  } catch (error) {
    console.log(error)
  }
}
module.exports = dbconnection;