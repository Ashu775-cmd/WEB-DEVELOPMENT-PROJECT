//access all the elements.
let taskInput=document.querySelector("#taskInput");
let addBtn=document.querySelector("#addBtn");
let outpurContainer=document.querySelector(".outpurContainer");
//create a function to create fields.

function createTask(task){
    let div=document.createElement("div");
    div.classList.add("taskContainer");
    
    let taskCheck=document.createElement("input");
    taskCheck.type="checkbox";
    taskCheck.classList.add("checkIcon");
    
    
    let taskDiv=document.createElement("div");
    taskDiv.classList.add("userTask");
    taskDiv.textContent=task;
    
    let dltBtn=document.createElement("button");
    dltBtn.classList.add("deleteBtn");
    dltBtn.textContent="Delete";
    
    div.appendChild(taskCheck);
    div.appendChild(taskDiv);
    div.appendChild(dltBtn);
    //append taskContainer in output container.
    outpurContainer.append(div);
    
    //add an eventlistener on checkbox button.
    taskCheck.addEventListener("click",()=>{
        if(taskCheck.checked){
            taskDiv.style.textDecoration="line-through";
        }
        else{
            taskDiv.style.textDecoration="none";
        }
    });
    //add an eventlistener on delete button.
    dltBtn.addEventListener("click",()=>{
        div.remove();
    });
   
}
    //add an eventlistener on addbtn
    addBtn.addEventListener("click",()=>{
        let task=taskInput.value.trim();
        if(task===""){
            alert("Please Enter a task here.");
        }
        else{
            createTask(task);
            //save to local storage.
            let taskArray=JSON.parse(localStorage.getItem("tasks"))||[];
            taskArray.push(task);
            localStorage.setItem("tasks",JSON.stringify(taskArray));
            taskInput.value="";
        }
    });
    //add task on pressing enter.
    taskInput.addEventListener("keydown",(event)=>{
        if(event.key==="Enter"){
            addBtn.click();
        }
    });
    //load tasks from localstorage
    window.addEventListener("DOMContentLoaded",()=>{
        let taskArray=JSON.parse(localStorage.getItem("tasks"))||[];
        taskArray.forEach((task)=>{
            createTask(task);
        });
       
    });

     