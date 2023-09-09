const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id === "calculate") {
            try {
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch (error) {
                display.value = "Error";
            }
        } else if (button.id === "clear") {
            currentInput = "";
            display.value = "";
        } else {
            currentInput += button.textContent;
            display.value = currentInput;
        }
    });
});