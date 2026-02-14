document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    let currentInput = "0"; // string

    function updateDisplay() {
        display.textContent = currentInput;
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            if (button.id === "clear") {
                currentInput = "0"; 
            } 
            else if (button.id === "delete") {
                currentInput = currentInput.slice(0, -1) || "0";
            } 
            else if (button.id === "equals") {
                try {
                    currentInput = eval(
                        currentInput.replace(/×/g, "*").replace(/÷/g, "/")
                    ).toString();
                } catch {
                    currentInput = "Error";
                }
            } 
            else {
                if (currentInput === "0" && !isNaN(value)) {
                    currentInput = value;
                } else {
                    currentInput += value;
                }
            }

            updateDisplay();
        });
    });


    // for keyboard
    document.addEventListener("keydown", (e) => {
    const key = e.key;

    // Numbers 0-9
    if (!isNaN(key)) {
        if (currentInput === "0") currentInput = key;
        else currentInput += key;
    }
    // Operators
    else if (["+", "-", "*", "/", "%"].includes(key)) {
        currentInput += key;
    }
    // Decimal point
    else if (key === ".") {
        currentInput += key;
    }
    // Enter → equals
    else if (key === "Enter" || key === "=") {
        try {
            currentInput = eval(currentInput).toString();
        } catch {
            currentInput = "Error";
        }
    }
    // Backspace → delete last character
    else if (key === "Backspace") {
        currentInput = currentInput.slice(0, -1) || "0";
    }
    // Escape → clear
    else if (key === "Escape") {
        currentInput = "0";
    }

    updateDisplay();
});


    updateDisplay();
});
