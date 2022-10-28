


// console.log("hai")

 async function CallApi(){
    try {
        let response=await axios.get("/api/task/alltask")
    console.log(response.data);
    if(response.data.sucess){
        // console.log("sucess");
    }
    let {alltask}=response.data
    let cardArry=alltask.map((ot)=>{
        // console.log(ot.tittle);
        return `<div class="main-container">
        <div class="card">
        
            <div class="main-box">
                <h3 class="ti">${ot.tittle}</h3>
                <p class="para">${ot.discription} </p>
                 ${ot.completed ? '<i class="fa-regular fa-circle-check"></i>':'<i class="fa-regular fa-circle-xmark"></i>' }
                ${ot.completed ? "":`<button  data-id="${ot._id}" class="bnt1">Compeletd</button>`}
                <a href="edittask.html?id=${ot._id}"> <button class="bnt2">Edit</button></a>
                <button data-id="${ot._id}" class="deletebtn">Delete</button>
          <p>${ot.createdAt}</p>
            </div>
            </div>
        
    </div>`
    // icon/font Awsome
        
    })
    .join(" ")
    console.log(cardArry)
    document.getElementById("wrap").innerHTML=cardArry
    } catch (error) {
        console.log(error)
        
    }
    
    
}
CallApi()
document.getElementById("wrap").addEventListener("click", async function(e){
    // alert("task completed")
    console.log(e.target.innerHTML)
    if(e.target.innerHTML=="Delete"){
    try {
            // alert("delete")
            console.log(e.target.dataset.id)
            let id= e.target.dataset.id
            let response= await axios.delete("/api/task/delete/"+id)
            if(response.data.suces){
                alert(response.data.msg)
            }else{
                alert(response.data.msg)
            }
            window.location.href="/task.html"
        } catch (error) {
            alert("Server Error.....Retry!!!")
        }
    }else if(e.target.innerHTML=="Compeletd"){
        let id=e.target.dataset.id
        let obj={
            completed:true,
        }
        let response=await axios.patch("/api/task/Updatetask/"+id,obj)
        if(response.data.sucess){
            alert(response.data.msg)
       window.location.href="/task.html"
        }else{
            alert(response.data.msg)
        }
    }

    

})