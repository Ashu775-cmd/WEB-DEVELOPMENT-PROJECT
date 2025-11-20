//access all the elements.
let taskInput=document.querySelector("#taskInput");
let addBtn=document.querySelector("#addBtn");
let outpurContainer=document.querySelector(".outpurContainer");

//store the task value on a local variable and trim it.
//add an eventlistener on add button.
addBtn.addEventListener("click",()=>{
    let task=taskInput.value.trim();
    if(task===""){
        alert("Please enter a task here.");
    }
    else{

        //creating elements.
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


        //adding tasks in local storage.
        let taskArray=JSON.parse(localStorage.getItem("tasks"))||[];
        //push new task in array.
        taskArray.push(task);
        localStorage.setItem("tasks",JSON.stringify(taskArray));

        taskInput.value="";
    }
});
//add an eventlistener on addtask
taskInput.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
        addBtn.click();
    }
});
