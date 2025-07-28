const mongoose = require("mongoose")
const studentSchema = new mongoose.Schema({
  studentname:{type:String,required:true},
  studentrollno:{type:String,required:true},
  studentdepartment:{type:String,required:true},
  studentemail:{type:String,required:true},
  studenttotalmarks:{type:String,required:true}
})
module.exports = mongoose.model("Student",studentSchema)