let bill=5000;
let tip=10;
let totalPerson=2;
function calculateTip(){
    let tipp=bill*(tip/100);
    let totalAmount=bill+(bill*10)/100;
    let tipPerPerson=tipp/totalPerson;
    let billPerPerson=totalAmount/totalPerson;
    console.log(tipp,totalAmount,tipPerPerson,billPerPerson);
}
console.log(calculateTip());