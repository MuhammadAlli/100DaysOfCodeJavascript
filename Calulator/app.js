let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("main__button"));

buttons.map( button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText) {
            case "AC":
                display.value = "";
                break;
            case "←":
                if (display.value == "Syntex Error") {
                    display.value = "";
                }
                
                if (display.value) {
                    display.value = display.value.slice(0, -1);
                }
                break;
            case "=":
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = "Syntex Error";
                }
                break;
            case "%":
                display.value = (display.value) / 100;
                break;
            default:
                if (display.value == "Syntex Error") {
                    display.value = e.target.innerText;
                } else {
                    display.value += e.target.innerText;
                }
        }

        if (display.value == "undefined") {
            display.value = "Syntex Error"
        }
    });
});