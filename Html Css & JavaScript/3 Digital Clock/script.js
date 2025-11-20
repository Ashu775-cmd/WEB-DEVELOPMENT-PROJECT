//let access the elements.
let firstTimePara=document.querySelector(".timePara");
let secondTimePara=document.querySelector(".datePara");
let thirdPara=document.querySelector(".dayPara");
let toggleBtn=document.querySelector(".btn");
let is24hours=false;
//creating date object to extract information.
function updateClock(){
    let date=new Date();
    let hour=date.getHours();
    let minute=date.getMinutes();
    let second=date.getSeconds();

    let ampm="";
    if(!is24hours){
        ampm=hour<=12?"AM":"PM";
        hour=hour%12||12;
    }
    let presentDate=date.getDate();
    let month=date.getMonth()+1;
    let year=date.getFullYear();
    //let access the days of week
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day=days[date.getDay()];

    hour=String(hour).padStart(2,"0");
    minute=String(minute).padStart(2,"0");
    second=String(second).padStart(2,"0");
    presentDate=String(presentDate).padStart(2,"0");
    month=String(month).padStart(2,"0");

    //display all the elements on screen.
    firstTimePara.innerHTML=`- <span id="hour">${hour}</span>:<span id="minute">${minute}</span>:<small id="second">${second}</small> ${ampm}</p>`;
    secondTimePara.innerHTML=`- <span id="date" >${presentDate}</span>:<span id="month">${month}</span>:<span id="year">${year}</span></p>`;
    thirdPara.innerHTML=`- <span id="day">${day}</span></p>`;
}
updateClock();
toggleBtn.addEventListener("click",()=>{
         is24hours=!is24hours;
         toggleBtn.textContent = is24hours ? "Switch to 12-hour" : "Switch to 24-hour";
         updateClock(); // update immediately after switching
})
setInterval(updateClock,1000);
// console.log(day);