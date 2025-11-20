//let access all the elements.
let image=document.querySelectorAll("img");
let modal=document.querySelector(".modelContainer");
let closeBtn=document.querySelector("#closeBtn");
let imageContainer=document.querySelector(".imgCont");
let popupImage=document.querySelector("#popupImg");
console.log(image,modal,closeBtn,popupImage);

//add click event on images.
image.forEach((img)=>{
    img.addEventListener("click",()=>{
        popupImage.src=img.src;
        modal.style.display="flex";
        modal.style.transition="0.5s"
    });
});
//add an eventlistener on close button.
closeBtn.addEventListener("click",()=>{
    modal.style.display="none";
});