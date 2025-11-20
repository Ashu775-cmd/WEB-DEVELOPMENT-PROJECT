//first access all the elements.
let joke=document.querySelector("#joke");
let punchLine=document.querySelector("#punchLine");
let btn=document.querySelector(".btn");

//add an event on button
btn.addEventListener("click",()=>{
    async function getJoke() {
        try{
            let url= await fetch("https://official-joke-api.appspot.com/random_joke");
            let data=await url.json();
            console.log(data);
            console.log(data.punchline);
            console.log(data.setup);
            //display setup and punchline.
            joke.textContent=data.setup;
            punchLine.textContent=data.punchline;
        }
        catch(error){
            console.log("Error Occured.",error);
        }
    }
    getJoke();
})