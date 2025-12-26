
  const display = document.getElementById("display");

  function appendValue(value) {
      const operators = ["+", "-", "*", "/"];
      const lastChar = display.value.slice(-1);
      if (operators.includes(value) && operators.includes(lastChar)) return;
  
      display.value += value;
  }
  
  function clearDisplay() {
      display.value = "";
  }
  
  function deleteLast() {
      display.value = display.value.slice(0, -1);
  }
  
  function calculate() {
      try {
          let result = eval(display.value);
          if (!isFinite(result)) {
              display.value = "Error";
          } else {
              display.value = Number(result.toFixed(8));
          }
      } catch {
          display.value = "Error";
      }
  }


  document.addEventListener("keydown", (event) => {
    const key = event.key;

    // Handle numbers and operators
    if ("0123456789+-*/.".includes(key)) {
        appendValue(key);
    }

    // Handle Enter key for calculation
    if (key === "Enter") {
        calculate();
    }

    // Handle Escape key to clear display
    if (key === "Escape") {
        clearDisplay();
    }

    // Handle Backspace for deleting last character
    if (key === "Backspace") {
        deleteLast();
    }
});