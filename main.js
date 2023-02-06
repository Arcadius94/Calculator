const currentNumber = document.querySelector(".currentNumber");
const previousNumber = document.querySelector(".previousNumber");
const mathSign = document.querySelector(".mathSign");
const numbersButtons = document.querySelectorAll(".number");
const operatorsButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const calcHistory = document.querySelector(".history");
const btnHistory = document.querySelector(".history-btn");

let result = "";

function displayNumbers() {
  if (currentNumber.innerHTML === "" && this.textContent === ",") {
    currentNumber.textContent += "0";
  } else if (currentNumber.innerHTML.includes(",") && this.textContent === ",")
    return;
  currentNumber.textContent += this.textContent;
}

function showResult() {}

function operate() {
  if (currentNumber.innerHTML === "" && this.textContent === "-") {
    currentNumber.innerHTML = "-";
    return;
  } else if (currentNumber.innerHTML === "") return;
  // currentNumber.textContent += this.textContent;
  if (mathSign.innerHTML !== "") {
    showResult;
  }
  previousNumber.innerHTML = currentNumber.innerHTML;
  mathSign.innerHTML = this.textContent;
  currentNumber.innerHTML = "";
}

function showResult() {
  if (previousNumber.innerHTML === "" && currentNumber === "") return;

  let a = Number(currentNumber.innerHTML);
  let b = Number(previousNumber.innerHTML);
  let operator = mathSign.innerHTML;

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = b - a;
      break;
    case "x":
      result = a * b;
      break;
    case ":":
      result = a / b;
      break;
    case "^":
      result = b ** a;
      break;
  }
  addToHistory();
  btnHistory.classList.add("active");
  currentNumber.innerHTML = result;
  previousNumber.innerHTML = "";
  mathSign.innerHTML = "";
}

function addToHistory() {
  const newHistoryElement = document.createElement("li");
  newHistoryElement.classList.add("history-item");
  newHistoryElement.innerHTML = `${previousNumber.innerHTML} ${mathSign.innerHTML} ${currentNumber.innerHTML} = ${result}`;
  calcHistory.appendChild(newHistoryElement);
}
function clearResult() {
  result = 0;
  currentNumber.innerHTML = "";
  mathSign.innerHTML = "";
  previousNumber.innerHTML = "";
}

function clearHistory() {
  calcHistory.textContent = "";
  btnHistory.classList.remove("active");
  clearResult();
}

//Listeners
operatorsButtons.forEach((btn) => btn.addEventListener("click", operate));
equalsButton.addEventListener("click", showResult);
calcHistory.addEventListener("click", clearResult);
numbersButtons.forEach((btn) => btn.addEventListener("click", displayNumbers));
clearButton.addEventListener("click", clearResult);
btnHistory.addEventListener("click", clearHistory);
