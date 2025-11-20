//let access all the elements first.
let incrBtn=document.querySelector("#incrBtn");
let decrBtn=document.querySelector("#decrBtn");
let resetBtn=document.querySelector("#resetBtn");
let number=document.querySelector("#num");
decrBtn.style.visibility="hidden";
let count=0;
// number.innerText=count;
incrBtn.addEventListener("click",()=>{
    count++
    console.log(count);
    number.innerText=count;
    decrBtn.style.visibility="visible";
});
decrBtn.addEventListener("click",()=>{
    count--;
    if(count!==0){
        number.innerText=count;
        console.log(count);
    }
    else{
        count=0;
        number.innerText="0";
        decrBtn.style.visibility="hidden";
    }
});
resetBtn.addEventListener("click",()=>{
    let choice=confirm("Are You Want to Reset Counter.");
    if(choice===true){
        count=0;
        number.innerText=count;
        decrBtn.style.visibility="hidden";
    }
});
