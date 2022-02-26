let F = document.querySelector("#F");
let C = document.querySelector("#C");
let submit = document.querySelector("#submit");

submit.addEventListener("click", convert);

function convert (i) {
    i.preventDefault();

    C.value = (5 / 9) * (F.value - 32);
}