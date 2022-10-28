
const params=window.location.search

const id =new URLSearchParams(params).get("id")
console.log(id);
 async function fetchTask(){
    try {
        let response=await axios.get("/api/task/singletask/"+id)
        if(response.data.task){
            console.log(response.data.task)
            let oneTask=response.data.task
            console.log(oneTask.tittle)
            document.getElementById("title").value=oneTask.tittle
            document.getElementById("dis").value=oneTask.discription
        }
    } catch (error) {
        alert("Server error......Retry!!!")
    }
   

}fetchTask()


document.getElementById("form1").addEventListener( "submit",async function(e){
    e.preventDefault()
 let tittle=   document.getElementById("title").value
 console.log(tittle)
 let discription=document.getElementById("dis").value
 console.log(discription);
let obj={
    tittle:tittle,
    discription:discription,}
try {
    let response=await axios.patch("/api/task/Updatetask/"+id,obj)
    if(response.data.sucess){
       alert(response.data.msg)
       window.location.href="/task.html"
     
    }
} catch (error) {
    alert("Server error......Retry!!!")
}
 



})