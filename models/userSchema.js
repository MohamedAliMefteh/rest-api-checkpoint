const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    name:String,
    age:Number,
    email:String,
})
const User=mongoose.model("user",userSchema)
module.exports=User