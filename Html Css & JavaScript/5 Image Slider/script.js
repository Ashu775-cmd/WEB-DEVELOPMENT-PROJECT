//let access all the elements.
let prevBtn=document.querySelector("#previous");
let nextBtn=document.querySelector("#next");
let image=document.querySelectorAll("img");
let imagesBox=document.querySelector(".imagesBox");
console.log(prevBtn,nextBtn,image,imagesBox);
let count=0;
let slideWidth=300;
prevBtn.addEventListener("click",()=>{
    if(count===0){
        count=image.length-1;
    }
    else{
        console.log(count);
        count--;
    }
    imagesBox.style.transform=`translateX(-${count * slideWidth}px)`;
   
});
nextBtn.addEventListener("click",()=>{
    if(count===image.length-1){
        count=0;
    }
    else{
        console.log(count);
        count++
    }
    imagesBox.style.transform=`translateX(-${count * slideWidth}px)`
});