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

save.addEventListener("click", saveCalculation);

function balanceCalculation (e) {
    e.preventDefault();

    let incomeValue = parseInt(income.value);
    let foodValue = parseInt(food.value);
    let rentValue = parseInt(rent.value);
    let clothesValue = parseInt(clothes.value);

    if (!income.value || !food.value || !rent.value || !clothes.value) {
        alert("Pleas fill up the input filds");

        income.value = "";
        food.value = "";
        rent.value = "";
        clothes.value = "";
    } else if (isNaN(income.value) || isNaN(food.value) || isNaN(rent.value) || isNaN(clothes.value)) {
        alert("Please give a numeric number");

        income.value = "";
        food.value = "";
        rent.value = "";
        clothes.value = "";
    } else {
        expenses.innerText = foodValue + rentValue + clothesValue;

        balance.innerText = income.value - expenses.innerText;
    }

    if (incomeValue < expenses.innerText) {
        alert('Your expenses balance is big than your income');

        food.value = 0;
        rent.value = 0;
        clothes.value = 0;
    }
}

function saveCalculation () {
    if (savingAmount.innerText > balance) {
        alert('What you want to save is more than your balance');

        saveText.value = "";
    } else if (balance.innerText == "" && expenses.innerText == "") {
        alert("Your balance has not been calculated");

        saveText.value = "";
    } else if (isNaN(saveText.value)) {
        alert("Please give a numeric number");
    } else {
        savingAmount.innerText = parseInt((income.value * saveText.value) / 100);

        remainingBalance.innerText = parseInt(balance.innerText - savingAmount.innerText);
    }
}
