let form=document.getElementById("form1")
form.addEventListener("submit",async function(e){
    e.preventDefault()
let title1=document.getElementById("title").value
console.log(title1)  
let dis1=document.getElementById("dis").value
console.log(dis1)  

let obj={
    tittle:title1,
    discription:dis1,}
    try {
        let response=await axios.post("/api/task/addtask",obj)
    console.log(response)
    
    if(response.data.sucess){
        alert(response.data.msg)
        window.location.href="/task.html"
    }else{
        alert(response.data.msg)
    }
    } catch (error) {
        alert("Server Error....Retry!!!")
    }
    


}
    // alert("hai")
)
