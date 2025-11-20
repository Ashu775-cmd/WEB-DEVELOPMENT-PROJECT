// //let access the elements
let changeColorBtn=document.querySelector("#colorChangeBtn");
let resetColorBtn=document.querySelector("#resetColorBtn");
let body=document.querySelector("body");
let colorCode=document.querySelector("#colorCode");

// add an event listener on change color button.
changeColorBtn.addEventListener("click",()=>{
    //fucntion to create a hexcolor code.
    function getColor(){
        let color="#";
        const colorCode=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
        for(let i=0;i<6;i++){
            color+=colorCode[Math.floor(Math.random()*16)];
        }
        return color;
    }
    // when button is clicked this function will generate a random color.
    console.log(getColor());
    colorCode.textContent=getColor();
    body.style.backgroundColor=getColor();
});
// let's make an event on reset color button.
resetColorBtn.addEventListener("click",()=>{
    body.style.backgroundColor="#ffff";
    colorCode.textContent="#ffff"
});