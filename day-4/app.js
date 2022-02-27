let income = document.getElementById("income");
let food = document.getElementById("food");
let rent = document.getElementById("rent");
let clothes = document.getElementById("clothes");
let calculate = document.getElementById("calculate");
let expenses = document.getElementById("expenses");
let balance = document.getElementById("balance");
let saveText = document.getElementById("saveText");
let save = document.getElementById("save");
let savingAmount = document.getElementById("savingAmount");
let remainingBalance = document.getElementById("remainingBalance");

calculate.addEventListener("click", balanceCalculation);

save.addEventListener("click", saveCalculation)

function balanceCalculation (e) {
    e.preventDefault();

    let incomeValue = parseInt(income.value);
    let foodValue = parseInt(food.value);
    let rentValue = parseInt(rent.value);
    let clothesValue = parseInt(clothes.value);

    if (isNaN(expenses.innerText)) {
        alert("Pleas fill up the input fild with a numeric number");
    } else {
        expenses.innerText = foodValue + rentValue + clothesValue;

        balance.innerText = income.value - expenses.innerText;
    }
    if (incomeValue < expenses.innerText) {
        if(!alert('Your expenses balance is big than your income')){window.location.reload();}
    }
}

function saveCalculation () {
    if (savingAmount.innerText < balance) {
        if(!alert('What you want to save is more than your balance')){window.location.reload();}
    } else {
        savingAmount.innerText = parseInt((income.value * saveText.value) / 100);

        remainingBalance.innerText = parseInt(balance.innerText - savingAmount.innerText);
    }
}
