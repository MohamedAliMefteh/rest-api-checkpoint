const express=require("express")
const router=express.Router()
const {creatUser,findUser,updateUser,deleteUser}=require("../controllers/userController")





router.get("/finduser",findUser)
router.post("/create",creatUser)
router.put("/update/:id",updateUser)
router.delete("/delete/:id",deleteUser)
module.exports=router