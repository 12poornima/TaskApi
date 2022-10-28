const mongoose = require("mongoose");
const taskSchema = mongoose.Schema({
  tittle: {
    type: String,
    maxLength:50,
    required:[true,"you must enter title"]
  },
  discription:{
    type:String,
    maxLength:20,
    required:true,
  },
  createdAt:{
    type:String,
    maxLength:30,
    required:true,
  },
  completed:{
    default:false,
    type:Boolean,
  }
  

});
module.exports = mongoose.model("task", taskSchema);

