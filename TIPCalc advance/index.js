const date = new Date();
const currentYear = date.getFullYear();
document.querySelector(".copyright").innerHTML = ("Copyright © "  + currentYear);
let amountOfPeople = document.querySelector('input.first_input').value;
let lunchPrice = document.querySelector('input.second_input').value;

function searchInvalidAmounts() {
    if (amountOfPeople < 1) {
    alert ("Invalid amount of people!");
    } else if (lunchPrice < 1) {
    alert ("Invalid lunch price!");
    } 

}

function calculateRating() {
    const option = document.querySelector(".select").selectedIndex;
    switch (option) {
        case 0:
        return 0.25;
        break;
        case 1:
        return 0.2;
        break;
        case 2:
        return 0.15;
        break;
        case 3:
        return 0.1;
        break;
        case 4:
        return 0.05;
        break;
    }
}

function calculateTips(event) {
    amountOfPeople = document.querySelector('input.first_input').value;
    lunchPrice = document.querySelector('input.second_input').value;
    searchInvalidAmounts();
    const rate = calculateRating();
    console.log(rate);
    console.log(lunchPrice);
    console.log(amountOfPeople);
    let tipFromOnePerson = (((lunchPrice)*(rate))/(amountOfPeople));
    tipFromOnePerson = tipFromOnePerson.toFixed(2);
    document.querySelector("#tip_window").innerHTML = ("Tip is " + (tipFromOnePerson));
    document.querySelector("#tip_window").className = "show";
    setTimeout(function() {document.querySelector("#tip_window").className = document.querySelector("#tip_window").className.replace("show", "");}, 3500 )
    if (tipFromOnePerson < 1) {
        alert("Tip of one person lower than 1 (dollar, hrivna, euro or another currency)! Give your waiter 1 (dollar, hrivna, euro or another currency) and say thanks!)")
    }
event.preventDefault();
}

document.querySelector(".btn_calculate").addEventListener('click', calculateTips);