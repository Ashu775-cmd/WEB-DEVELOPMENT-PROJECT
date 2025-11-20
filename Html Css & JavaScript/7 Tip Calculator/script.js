// access all the elements.
let bill=document.querySelector("#billAmount");
let tip= document.querySelector("#tip");
let totalPersons=document.querySelector("#totalPersons");
let calcBtn=document.querySelector("#calcBtn");
let resetBtn=document.querySelector("#resetBtn");
//now access the result output box elements.
let resultTip=document.querySelector("#resultTip");
let resultTotalAmount=document.querySelector("#resultTotalAmount");
let resultTipPerPerson=document.querySelector("#resultTotalTipPerPerson")
let resultBillPerPerson=document.querySelector("#resultBillPerPerson");

//
calcBtn.addEventListener("click",()=>{
      if (bill.value === "" || tip.value === "" || totalPersons.value === "" || totalPersons.value <= 0) {
        alert("Please fill all fields with valid values.");
        return;
    }
    let billAmount=parseFloat(bill.value);
    let tipPercent=parseFloat(tip.value);
    let persons=parseInt(totalPersons.value);
    // console.log(typeof(billAmount),typeof(tipPercent),typeof(persons))
    //calculations
    let tipAmount=billAmount*(tipPercent/100);
    let totalAmount=billAmount+tipAmount;
    let tipPerPerson=tipAmount/persons;
    let billPerPerson=totalAmount/persons;

    //Now show result on result containe.
    resultTip.textContent=`Rs. ${tipAmount.toFixed(2)}`;
    resultTotalAmount.textContent=`Rs. ${totalAmount.toFixed(2)}`;
    resultTipPerPerson.textContent=`Rs. ${tipPerPerson.toFixed(2)}`;
    resultBillPerPerson.textContent=`Rs. ${billPerPerson.toFixed(2)}`;
});
//reset button logic
resetBtn.addEventListener("click",()=>{
   resultTip.textContent="";
   resultTotalAmount.textContent="";
    resultTipPerPerson.textContent="";
     resultBillPerPerson.textContent="";
     bill.value="";
     tip.value="";
     totalPersons.value="";
})