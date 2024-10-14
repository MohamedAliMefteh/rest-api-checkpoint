const express=require("express")
const app=express()
const dotenv=require("dotenv")
const mongoose=require("mongoose")

dotenv.config()
app.use(express.json())
app.use("/api",require("./routes/userRoutes"))

mongoose.connect(process.env.URI)
.then (()=>console.log("database connected successfully"))
.catch((err)=>console.error("err",err))



app.listen(process.env.PORT,()=>console.log("My server is running on port:",process.env.PORT))