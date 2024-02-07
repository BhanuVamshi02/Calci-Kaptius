const inputDisplay = document.getElementById("display");

function appendToDisplay(input) {
  inputDisplay.value += input;
}

function clearDisplay() {
  inputDisplay.value = "";
}

function deleteValue() {
  let currentValue = inputDisplay.value;
  inputDisplay.value = currentValue.substring(0, currentValue.length - 1);
}

function calculateResult() {
  try {
    inputDisplay.value = eval(inputDisplay.value);
    if (inputDisplay.value == Infinity || isNaN(inputDisplay.value)) {
      alert("Error: Enter a valid expression");
      inputDisplay.value = "";
    }
  } catch (error) {
    alert("Error: Enter a valid expression");
    inputDisplay.value = "";
  }
}

// Adding keyboard event listeners
document.addEventListener("keydown", function (event) {
  const key = event.key;

  // If key is a number or an operator, append it to display
  if (!isNaN(key) || "+-*/.%".includes(key)) {
    appendToDisplay(key);
  }

  // If key is "Enter", calculate the result
  if (key === "Enter") {
    calculateResult();
  }

  // If key is "Backspace", delete the last character
  if (key === "Backspace") {
    deleteValue();
  }

  // If key is "Escape", clear the display
  if (key === "Escape") {
    clearDisplay();
  }
});
