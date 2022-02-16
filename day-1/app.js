let usd = document.querySelector("#usd");
let bdt = document.querySelector("#bdt");
let btn = document.querySelector("#btn");

btn.addEventListener("click", BDT);

function BDT() {
    bdt.innerText = usd.value * 85.96;
}