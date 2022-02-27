let userInput = document.getElementById("input__text").innerText;
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let sciessors = document.getElementById("sciessors");
let userWin = document.getElementById("userWin");
let compWin = document.getElementById("compWin");
let inputAria = document.getElementById("input");
let compStatas = document.getElementById("compStatas");
let userStatas = document.getElementById("userStatas");

function getComputerInput() {
    let random = Math.random();
    let compInput;

    if (random < 0.34) {
        compInput = "ROCK";
    } else if (random < 0.67) {
        compInput = "PAPER";
    } else {
        compInput = "SCIESSORS";
    }

    return compInput;
}

let computerInput = getComputerInput();

rock.addEventListener("click", selectRock);

paper.addEventListener("click", selectPaper);

sciessors.addEventListener("click", selectSciessors);

function selectRock () {
    userInput = "ROCK";

    if (computerInput === userInput) {
        alert("This match has been drawn, please try again");

        location.reload();
    } else if ((userInput === "ROCK" && computerInput === "SCIESSORS") || (userInput === "PAPER" && computerInput === "ROCK") || (userInput === "SCIESSORS" && computerInput === "PAPER")) {
        userWin.style.display = "block";
        userWin.style.height = "100vh";
    } else {
        compWin.style.display = "block";
        compWin.style.height = "100vh";
    }

    inputAria.style.display = "none";
}

function selectPaper () {
    userInput = "PAPER";

    if (computerInput === userInput) {
        alert("This match has been drawn, please try again");

        location.reload();
    } else if ((userInput === "ROCK" && computerInput === "SCIESSORS") || (userInput === "PAPER" && computerInput === "ROCK") || (userInput === "SCIESSORS" && computerInput === "PAPER")) {
        userWin.style.display = "block";
        userWin.style.height = "100vh";
    } else {
        compWin.style.display = "block";
        compWin.style.height = "100vh";
    }

    inputAria.style.display = "none";
}

function selectSciessors () {
    userInput = "SCIESSORS";

    if (computerInput === userInput) {
        alert("This match has been drawn, please try again");

        location.reload();
    } else if ((userInput === "ROCK" && computerInput === "SCIESSORS") || (userInput === "PAPER" && computerInput === "ROCK") || (userInput === "SCIESSORS" && computerInput === "PAPER")) {
        userWin.style.display = "block";
        userWin.style.height = "100vh";
    } else {
        compWin.style.display = "block";
        compWin.style.height = "100vh";
    }

    inputAria.style.display = "none";
}