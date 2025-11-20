// access the elements.
let btn=document.querySelector(".btn");
let image=document.querySelector("img");
let fact=document.querySelector("#fact");
let loading=document.querySelector(".hide");
btn.addEventListener("click",()=>{
    async function getImage() {
        let response=await fetch("https://dog.ceo/api/breeds/image/random");
        let data=await response.json();

        dogImg=data.message;
         image.src=dogImg;
        image.style.visibility="visible"
    }
    getImage();
});