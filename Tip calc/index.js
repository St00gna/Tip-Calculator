let date = new Date();
let currentYear = date.getFullYear();
document.querySelector("footer p").innerHTML = ("Copyright © "  + currentYear);


    

function Calculate() {
let amount = document.querySelector('input.amount_of_persons').value;
let number = document.querySelector('input.number_in_bill').value;
let option = document.querySelector('select').selectedIndex;
let rate = 0;
switch (option) {
    case 0: 
    rate = 0.25;
    break;
    case 1: 
    rate = 0.2;
    break; 
    case 2: 
    rate = 0.15;
    break;
    case 3: 
    rate = 0.1;
    break;
    case 4: 
    rate = 0.05;
    break;
}
let sum = ((Math.round((((number)*(rate))/(amount))) / 100) * 100);
document.querySelector("div.pop_up").setAttribute("style", "display: block;")
document.querySelector("h3").innerHTML= "Tip from one person " + sum;
}

document.querySelector("button").addEventListener("click", Calculate);