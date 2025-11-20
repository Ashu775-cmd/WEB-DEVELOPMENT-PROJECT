//access the elements.
let btn = document.querySelector("#btn");
let image = document.querySelector("img");
let imgContainer = document.querySelector(".imgContainer");
let fact = document.querySelector("#fact");
let loading = document.querySelector("#loading");
// let access data using api.
btn.addEventListener("click", () => {
    imgContainer.style.visibility = "visible";
    loading.style.display = "block";
    image.style.display = "none";
    async function getImg() {
        try {
            let response = await fetch("https://api.thecatapi.com/v1/images/search");
            let data = await response.json();
               // cat fact 
            let factResponse = await fetch("https://catfact.ninja/fact");
            let factData = await factResponse.json();
            // console.log(factData.fact);
            let catfact=factData.fact;
            fact.innerHTML=`<strong>Fact: </strong>${ catfact}`;

            let imgSrc = data[0].url;
            image.onload = () => {
                loading.style.display = "none";
                image.style.display = "block";
            };

            image.src = imgSrc;
        }
        catch (error) {
            console.log("Error Occured: ", error);
        }
    }
    getImg();
});