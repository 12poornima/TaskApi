const express=require("express")
const app =express()
const path=require('path')
const cors=require("cors")

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://poornima:1234@cluster0.76tvd1s.mongodb.net/taskDb?retryWrites=true&w=majority",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("connect to db")
    }
})

const taskRouter=require('./routes/task')

app.use('/api/task',taskRouter)


  
app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("server running at port")
    }
  })