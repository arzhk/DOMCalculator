window.addEventListener("DOMContentLoaded", function () {
  const resultValue = document.querySelector("#result");
  let valueA = 0; // First operant
  let operation = ""; // Operator
  let valueB = 0; //Second operant
  const result = document.querySelector("#result");

  const numericButtons = document.querySelectorAll(".numericButton");

  const numericButtonPressed = function () {
    const numberPressed = event.target.value;

    if (result.value === "0") {
      result.value = numberPressed;
    } else {
      result.value += numberPressed;
    }
  };

  const functionButtons = document.querySelectorAll(".functionButton");

  const functionButtonPressed = function () {
    const functionPressed = event.target.value;

    switch (functionPressed) {
      case "=":
        switch (operation) {
          case "+":
            result.value = valueA + parseFloat(result.value);
            break;
          case "-":
            result.value = valueA - parseFloat(result.value);
            break;
          case "/":
            result.value = valueA / parseFloat(result.value);
            break;
          case "*":
            result.value = valueA * parseFloat(result.value);
            break;
        }
        break;
      case "C":
        valueA = 0;
        result.value = 0;
        break;
      default:
        valueA = parseFloat(result.value);
        operation = functionPressed;
        result.value = "0";
    }
  };

  for (let button of numericButtons) {
    button.addEventListener("click", numericButtonPressed);
  }

  for (let button of functionButtons) {
    button.addEventListener("click", functionButtonPressed);
  }
});
