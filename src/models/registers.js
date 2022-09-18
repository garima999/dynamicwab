const mongoose=require("mongoose");
const employeeSchema=new mongoose.Schema({
   name:{
    type:String,
    require:true,

   },
   Lastname:{
    type:String,
    required:true,

   },
   Enteremail:{
    type:String,
    required:true,
    unique:true,

   },
   Password:{
    type:Number,
    required:true,
   },
   ConfirmPassword:{
    type:Number,
    required:true,
   }
})
const Register=new mongoose.model("Register",employeeSchema)
module.exports=Register;