const express=require("express")
const router=express.Router()
const {sendHai,sendHello,addtask,Updatetask,getAllTask,singletask,deletetask}=require("../controllers/taskController")


router.get('/',sendHai)
  router.get('/hello',sendHello)
router.get('/alltask',getAllTask)
router.get('/singletask/:taskId',singletask)
router.delete('/delete/:taskId',deletetask)

router.post("/addtask",addtask)
router.patch("/Updatetask/:taskId",Updatetask)

module.exports=router