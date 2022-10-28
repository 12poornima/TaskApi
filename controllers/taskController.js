const taskModel = require("../models/taskModel");
const TaskModel = require("../models/taskModel");
// const mongoose=require("mongoose")
const sendHai = function (req, res) {
  res.send("haai");
};
const sendHello = function (req, res) {
  res.send("hai hello");
};

// const Cat = mongoose.model('Cat', { name: String });
// const addtask=function(req,res){
//     console.log(req.body)
// let kitty = new Cat(req.body);
// kitty.save()

//     res.send("addtask")
// }

const addtask = async function (req, res) {
  console.log(req.body);
  // let taskMan= new TaskModel(req.body);
  // taskMan.save()
  let d=new Date()
  d=d.toLocaleDateString()
  console.log(req.body.createdAt=d)
  try {
    await taskModel.create(req.body);
    res.json({ sucess: true, msg: "suecssfully added task" });
  } catch (error) {
    res.json({ sucess: false, msg: "falied to add task!! Retry" });
  }
};

const getAllTask= async function(req,res){
  console.log("haii");
  try {
    let alltask =await taskModel.find()
   console.log(alltask)
   res.json({sucess:true,alltask})
}
  catch (error) {
    console.log(error);
    res.json({ sucess: false, msg: "falied to add alltask!! Retry" });
  }
}


const Updatetask = async function (req, res) {
  console.log(req.params.taskId);
  console.log(req.body);
  try {
    await taskModel.findOneAndUpdate(
      {
        _id: req.params.taskId,
      },
      req.body
    );
    res.json({sucess:true,msg:"completed upadate"});
    
  } catch (error) {
    console.log(error)
    res.json({ sucess: false, msg: "falied to upadte...Retry" });
  }
  
};

const singletask=async function(req,res){
  console.log(req.params.taskId)
  console.log(req.body)
  try {
    let task= await taskModel.findOne({_id: req.params.taskId,})
     res.json({sucess:true,task ,msg:"got task"})
  } catch (error) {
    console.log(error)
    res.json({ sucess: false, msg: "falied ...Retry" })
  }
     
}

const deletetask= async  function(req,res){
  console.log(req.params.taskId)
  try {
    let taskDelete= await taskModel.findOneAndDelete({_id:req.params.taskId,})
    res.json({sucess:true,taskDelete,msg:"detete task sucessfully"})
    
  } catch (error) {
    console.log(error)
    res.json({sucess:false,msg:"falied to delete....Retry"})
    
  }

}

module.exports = { sendHai, sendHello, addtask, Updatetask,getAllTask,singletask,deletetask }
